/* eslint-disable prettier/prettier */
const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
	// userId: {
	// 	type: mongoose.Schema.Types.ObjectId,
  //   ref: "User",
  //   required: [true, "Customer must belong to a user"],
	// },
	name: {
		type: String,
		required: [true, "Customer must have a name"],
		unique: [true, "Customer must have a unique name"],
		trim: true,
	},
	email: {
		type: String,
		required: [true, "Customer must have an email"],
		unique: [true, "Customer must have a unique email"],
		trim: true,
	},
	address: {
		type: String,
		required: [true, "Customer must have an address"],
		trim: true,
	},
	phoneNumber: {
		type: Number,
		required: [true, "Customer must have a phone number"],
		trim: true,
	},
	position: {
    lat: {
      type: String,
      required: [true, "Latitude is required"]
    },
    lng: {
      type: String,
      required: [true, "Longitude is required"]
    }
  },
	createdAt: {
		type: Date,
		default: Date.now(),
		select: false,
	}
});

const Customer = mongoose.model("Customer", customerSchema);

// console.log("UserId:", mongoose.Schema.Types.ObjectId.toString());

module.exports = Customer;
