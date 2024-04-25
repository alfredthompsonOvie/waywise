require("dotenv").config();
const mongoose = require("mongoose");

process.on("unhandledException", (err) => {
	console.log(err.name, err.message);
	console.log("UNCAUGHT EXCEPTION SHUTDOWN!");
	process.exit(1);
});

const app = require("./app");

const PORT = process.env.PORT || 3000;

const DB = process.env.DATABASE.replace(
	"<PASSWORD>",
	process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => {
	console.log("Connected to MongoDB");
});

const server = app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

process.on("unhandledRejection", (err) => {
	console.log(err.name, err.message);
	console.log("UNHANDLED REJECTION SHUTDOWN!");
	server.close(() => {
		process.exit(1);
	});
});
