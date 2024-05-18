const express = require("express");
const morgan = require('morgan');
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cookieParser = require("cookie-parser");
const cors= require("cors");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const customerRoutes = require("./routes/customerRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(helmet());

if (process.env.NODE_ENV !== 'development') {
  app.use(morgan("dev"))
}

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour!",
});

app.use("/api", limiter);

app.use(express.json({ limit: "10kb" }));

app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use(express.static(`${__dirname}/public`));

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/customers", customerRoutes);

app.all("*", (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

module.exports = app;