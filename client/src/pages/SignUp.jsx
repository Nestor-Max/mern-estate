import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function SignUp() {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
	});

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
	};
	console.log(formData);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { username, email, password } = formData;
		// const res = await axios.post('/api/auth/signup', {
		// 	username,
		// 	email,
		// 	password,
		// });
		// const res = await fetch('/api/auth/signup', {
		// 	method: 'POST',
		// 	headers: {
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify(formData),
		// });
		// const data = await res.json();
		// console.log(data);

		// // axios.post('', { username, email, password });

		try {
			const { formData } = await axios.post('/api/auth/signup', {
				username,
				email,
				password,
			});
			if (formData.error) {
				toast.error(formData);
			} else {
				setFormData({});
				toast.success('Login Successful. Welcome');
			}
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="p-3 max-w-lg mx-auto">
			<h1 className="text-3xl text-center font-semibold my-7 text-slate-700">
				SignUp
			</h1>
			<form onSubmit={handleSubmit} className=" flex flex-col gap-4">
				<input
					type="text"
					placeholder="Username"
					className="border p-3 rounded-lg "
					id="username"
					name="username"
					value={formData.username}
					onChange={handleChange}
				/>
				<input
					type="email"
					placeholder="Email"
					className="border p-3 rounded-lg"
					id="email"
					name="username"
					value={formData.email}
					onChange={handleChange}
				/>
				<input
					type="password"
					placeholder="Password"
					className="border p-3 rounded-lg "
					id="password"
					name="username"
					value={formData.password}
					onChange={handleChange}
				/>

				<button className="bg-yellow-600 text-white p-3 rounded-lg uppercase hover:opacity-85 disabled:opacity-70">
					Sign In
				</button>
			</form>
			<div className="flex gap-2 mt-3">
				<p>Have an account?</p>
				<Link to={'/sign-in'}>
					<span className="text-slate-700">Sign In</span>
				</Link>
			</div>
		</div>
	);
}
