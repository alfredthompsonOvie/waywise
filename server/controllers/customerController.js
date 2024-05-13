/* eslint-disable prettier/prettier */
const Customer = require("../models/customerModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllCustomers = catchAsync(async (req, res, next) => {

	// const customers = await Customer.find();
	
	const userId = req.user._id.toString();
	console.log("userId",userId);
	const customers = await Customer.find({userId});
	// console.log("Customers",customers);

	res.status(200).setHeader('Content-Type', 'application/json').json({
		status: "success",
		results: customers.length,
		data: {
			customers,
		},
	});
	
});

// Controller function to get a customer by ID
exports.getCustomerById = catchAsync(async (req, res, next) => {
	
	const customer = await Customer.findById(req.params.id);

	if (!customer) { 
		return next(new AppError("Customer not found", 404));
	}

		res.status(200).json({
			status: "success",
			data: {
				customer,
			},
		});

});

// Controller function to create a new customer
exports.createCustomer = catchAsync(async (req, res, next) => {
	const newCustomer = await Customer.create(req.body);
		res.status(201).json({
			status: "success",
			data: {
				customer: newCustomer,
			},
		});

});

// Controller function to update a customer by ID
exports.updateCustomer = catchAsync(async (req, res, next) => {
	const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

	if (!customer) { 
		return next(new AppError("Customer not found", 404));
	}

	res.status(200).json({
		status: "success",
		data: {
			customer
		},
	});

});

// Controller function to delete a customer by ID
exports.deleteCustomer = catchAsync(async (req, res, next) => {
	const customer = await Customer.findByIdAndDelete(req.params.id);

	if (!customer) { 
		return next(new AppError("Customer not found", 404));
	}

	res.status(204).json({
		status: "success",
		data: null
	});

});

exports.deleteAllCustomers = catchAsync(async (req, res, next) => {

	await Customer.deleteMany();
	console.log("Customers deleted successfully");

	res.status(204).json({
		status: "success",
		data: null
	});

});