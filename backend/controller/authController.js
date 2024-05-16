const asyncHandler = require('express-async-handler');
const User = require('../Model/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
//@desc POST user
//@route create /api/auth
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
//@desc POST user
//@route CREATE /api/auth
//@access Public
const signin = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const validUser = await User.findOne({ email });
	if (!validUser) {
		throw new Error('User not found');
	}

	const validPassword = bcrypt.compareSync(password, validUser.password);

	if (!validPassword) {
		throw new Error('Wrong Credentials!');
	}

	//token.generateToken(validUser._id);
	const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
	const { password: pass, ...rest } = validUser._doc;
	res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);
});

// const generateToken = (id) => {
// 	return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
// };

module.exports = {
	signup,
	signin,
};
