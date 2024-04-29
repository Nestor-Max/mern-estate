const asyncHandler = require('express-async-handler');

//@desc GET user
//@route GET /api/auth
//@access Public
const signup = asyncHandler(async (req, res) => {
	res.status(200).json({
		message: 'Sign Up',
	});
});

module.exports = {
	signup,
};
