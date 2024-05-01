const express = require('express');
const { signup } = require('../controller/authController');
const router = express.Router();

router.route('/signup').get(signup);

module.exports = router;
