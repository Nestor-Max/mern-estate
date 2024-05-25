import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
	SignInFailure,
	SignInSuccess,
	signInStart,
} from '../redux/user/userSlice';

export default function SignIn() {
	const [formData, setFormData] = useState({});
	const { loading, error } = useSelector((state) => state.user);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			dispatch(signInStart());
			const res = await fetch('/api/auth/signin', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			console.log(data);
			if (data.success === false) {
				dispatch(SignInFailure(data.message));
				return;
			}
			dispatch(SignInSuccess(data));
			navigate('/');
		} catch (error) {
			dispatch(SignInFailure(error.message));
		}
	};

	return (
		<div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md mt-16">
			<h1 className="text-3xl text-center font-semibold mb-6 text-gray-800">
				Sign In
			</h1>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<input
					type="email"
					placeholder="Email"
					className="border p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
					id="email"
					name="email"
					onChange={handleChange}
				/>
				<input
					type="password"
					placeholder="Password"
					className="border p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
					id="password"
					name="password"
					onChange={handleChange}
				/>
				<button
					disabled={loading}
					className="bg-indigo-600 text-white p-3 rounded-lg uppercase hover:bg-indigo-700 disabled:bg-indigo-400"
				>
					{loading ? 'Loading...' : 'Sign In'}
				</button>
			</form>
			<div className="flex gap-2 mt-6">
				<p className="text-gray-600">Don't have an account?</p>
				<Link to={'/sign-up'}>
					<span className="text-indigo-600 hover:underline">Sign Up</span>
				</Link>
			</div>
			{error && <p className="text-red-500 mt-4">{error}</p>}
		</div>
	);
}
