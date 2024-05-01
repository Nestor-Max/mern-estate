const asyncHandler = require('express-async-handler');
const User = require('../Model/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
//@desc GET user
//@route GET /api/auth
//@access Public
const signup = asyncHandler(async (req, res) => {
	const { username, email, password } = req.body;

	// const newUser =  new User({
	// 	username,email,password
	// })
	// await newUser.save();
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);
	const user = await User.create({
		username,
		email,
		password: hashedPassword,
	});

	if (!user) {
		throw new Error('User already exists');
	}

	res.status(200).json({
		username: user.username,
		email: user.email,
	});
});

module.exports = {
	signup,
};
