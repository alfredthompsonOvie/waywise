const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = catchAsync(async function (req, res, next) {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    address: req.body.address,
  });

  const token = signToken(newUser._id);

  const user = await User.findById(newUser._id).select("-password");
  console.log(user);

  res.status(201).json({
    status: "success",
    token,
    data: {
      user
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }

  const user = await User.findOne({ email }).select("+password");
  console.log("user",user);

  const correct = await user.correctPassword(password, user.password);
  console.log("correct",correct);

  if (!user || !correct) {
    return next(new AppError("Incorrect email or password", 401));
  }

  const token = signToken(user._id);
  res.status(200).json({
    status: "success",
    token,
    data: {
      user: {
        name: user.name,
        email: user.email,
        address: user.address,
        phoneNumber: user.phoneNumber,
        photo: user.photo
        
      }
    }
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to get access.", 401),
    );
  }

  // FIX THIS PART

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  console.log(decoded);

  const freshUser = await User.findById(decoded.id);

  if (!freshUser) {
    return next(new AppError("The user belonging to this token is no longer available", 401))
  }

  if (freshUser.changedPasswordAfter(decoded.iat)) {
    return next(new AppError("User recently changed password! Please log in again.", 401))
  }

  req.user = freshUser;

  next();
});
