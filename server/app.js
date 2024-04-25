const express = require("express");
const morgan = require('morgan');
const cors= require("cors");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const customerRoutes = require("./routes/customerRoutes");
const userRoutes = require("./routes/userRoutes");


const app = express();
if (process.env.NODE_ENV !== 'development') {
  app.use(morgan("dev"))
  
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(cors());

app.use("/api/v1/customers", customerRoutes);
app.use("/api/v1/users", userRoutes);

app.all("*", (req, res, next) => {
  next(new AppError(`Cant find ${req.originalUrl} on this server`, 404));
});


app.use(globalErrorHandler);

module.exports = app;
