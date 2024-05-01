const express = require('express');

const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');
const { errorHandler } = require('./middleware/errorMiddleware');
const app = express();

app.use(express.json());
app.use(
	express.urlencoded({
		extended: false,
	})
);

connectDB();

app.use('/api/user', require('./routes/userRoute'));
app.use('/api/auth', require('./routes/authRoute'));
app.use(errorHandler);
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
