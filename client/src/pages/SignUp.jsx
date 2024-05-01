import { Link } from 'react-router-dom';

export default function SignUp() {
	return (
		<div className="p-3 max-w-lg mx-auto">
			<h1 className="text-3xl text-center font-semibold my-7 text-slate-700">
				SignUp
			</h1>
			<form className=" flex flex-col gap-4 ">
				<input
					type="text"
					placeholder="Username"
					className="border p-3 rounded-lg "
					id="username"
				/>
				<input
					type="text"
					placeholder="Email"
					className="border p-3 rounded-lg"
					id="username"
				/>
				<input
					type="text"
					placeholder="Password"
					className="border p-3 rounded-lg "
					id="username"
				/>

				<button className="bg-yellow-600 text-white p-3 rounded-lg uppercase hover:opacity-85 disabled:opacity-70">
					Sign Up
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
