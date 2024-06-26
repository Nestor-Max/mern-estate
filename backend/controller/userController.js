const asyncHandler = require('express-async-handler');
//@desc GET user
//@route GET /api/user
//@access Public
const getUser = asyncHandler(async (req, res) => {
	res.status(200).json({
		message: 'Get User',
	});
});

module.exports = {
	getUser,
};
