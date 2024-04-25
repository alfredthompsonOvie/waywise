const express = require("express");
const authController = require("../controllers/authController");

const {
	getAllCustomers,
	getCustomerById,
	createCustomer,
	updateCustomer,
	deleteCustomer,
	deleteAllCustomers,
} = require("../controllers/customerController");

const router = express.Router();

// Define routes
router
	.route("/")
	.get(authController.protect, getAllCustomers)
	.post(createCustomer)
	.delete(deleteAllCustomers);

router
	.route("/:id")
	.get(getCustomerById)
	.patch(updateCustomer)
	.put(updateCustomer)
	.delete(deleteCustomer);

// Export router
module.exports = router;
