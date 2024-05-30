import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function SignUp() {
	const [formData, setFormData] = useState({});
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.id]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		try {
			const res = await fetch('/api/auth/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
			const data = await res.json();
			console.log(data);
			if (data.success === false) {
				setLoading(false);
				setError(data.message);
				return;
			}
			setLoading(false);
			setError(null);
			navigate('/sign-in');
		} catch (error) {
			setLoading(false);
			setError(error.message);
		}
	};

	return (
		<div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md mt-16">
			<h1 className="text-3xl text-center font-semibold mb-6 text-gray-800">
				Sign Up
			</h1>
			<form onSubmit={handleSubmit} className="flex flex-col gap-4">
				<input
					type="text"
					placeholder="Username"
					className="border p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
					id="username"
					name="username"
					onChange={handleChange}
				/>
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
					{loading ? 'Loading...' : 'Sign Up'}
				</button>
				<OAuth />
			</form>
			<div className="flex gap-2 mt-6">
				<p className="text-gray-600">Have an account?</p>
				<Link to={'/sign-in'}>
					<span className="text-indigo-600 hover:underline">Sign In</span>
				</Link>
			</div>
			{error && <p className="text-red-500 mt-4">{error}</p>}
		</div>
	);
}
