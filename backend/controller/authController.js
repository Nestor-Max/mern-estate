const asyncHandler = require('express-async-handler');
const User = require('../Model/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
//@desc GET user
//@route GET /api/auth
//@access Public
const signup = asyncHandler(async (req, res, next) => {
	const { username, email, password } = req.body;
	if (!username || !email || !password) {
		throw new Error('Information incomplete');
	}

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);
	const user = new User({
		username,
		email,
		password: hashedPassword,
	});

	await user.save();

	if (!user) {
		throw new Error('User already exists');
	}

	res.status(200).json({
		username: user.username,
		email: user.email,
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
