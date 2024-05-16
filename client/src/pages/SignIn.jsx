import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {
	const [formData, setFormData] = useState({});
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.id]: e.target.value,
		});
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
		<div className="p-3 max-w-lg mx-auto">
			<h1 className="text-3xl text-center font-semibold my-7 text-slate-700">
				Sign In
			</h1>
			<form onSubmit={handleSubmit} className=" flex flex-col gap-4">
				<input
					type="email"
					placeholder="Username or Email"
					className="border p-3 rounded-lg"
					id="email"
					name="username"
					onChange={handleChange}
				/>
				<input
					type="password"
					placeholder="Password"
					className="border p-3 rounded-lg "
					id="password"
					name="username"
					onChange={handleChange}
				/>

				<button
					disabled={loading}
					className="bg-yellow-600 text-white p-3 rounded-lg uppercase hover:opacity-85 disabled:opacity-70"
				>
					{loading ? 'Loading...' : 'Sign In'}
				</button>
			</form>
			<div className="flex gap-2 mt-3">
				<p>Don't have an account?</p>
				<Link to={'/sign-up'}>
					<span className="text-slate-700">Sign Up</span>
				</Link>
			</div>
			{error && <p className="text-red-500 mt-5">{error}</p>}
		</div>
	);
}
