/* eslint-disable prettier/prettier */
const Customer = require("../models/customerModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllCustomers = catchAsync(async (req, res, next) => {

	const customersDb = await Customer.find({ userId: req.user._id });

	const customers = [...customersDb];

	res.status(200).setHeader('Content-Type', 'application/json').json({
		status: "success",
		results: customers.length,
		data: {
			customers,
		},
	});
});

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

exports.createCustomer = catchAsync(async (req, res, next) => {
	const newCustomer = await Customer.create(req.body);
		res.status(201).json({
			status: "success",
			data: {
				customer: newCustomer,
			},
		});
});

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