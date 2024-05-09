const asyncHandler = require('express-async-handler');
const User = require('../Model/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
//@desc GET user
//@route GET /api/auth
//@access Public
const signup = asyncHandler(async (req, res) => {
	//const { username, email, password } = req.body;
	// if (!req.body.text) {
	// 	throw new Error('Enter all required information');
	// }
	// const newUser =  new User({
	// 	username,email,password
	// })
	// await newUser.save();

	// const salt = await bcrypt.genSalt(10);
	// const hashedPassword = await bcrypt.hash(password, salt);
	// const user = await User.create({
	// 	username,
	// 	email,
	// 	password: hashedPassword,
	// });

	// if (!user) {
	// 	throw new Error('User already exists');
	// }

	// res.status(200).json({
	// 	username: user.username,
	// 	email: user.email,
	// });

	res.status(200).json({
		message: 'User Connected Successfully',
	});
});

const getMe = asyncHandler(async (req, res) => {
	res.status(200).json({
		message: 'Connected',
	});
});

module.exports = {
	signup,
	getMe,
};
