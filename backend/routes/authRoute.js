const express = require('express');
const { signup, signin } = require('../controller/authController');
const router = express.Router();
const cors = require('cors');

router.use(
	cors({
		origin: 'http://localhost:5173/',
		credentials: true,
	})
);

router.route('/signup').post(signup);
router.route('/signin').post(signin);

module.exports = router;
