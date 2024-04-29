import { Link } from 'react-router-dom';
export default function Header() {
	return (
		<header className="bg-slate-700 shadow-md">
			<div className="flex justify-between items-center max-w-6xl mx-auto p-3">
				<Link to="/">
					<h1 className="font-bold text-sm text-xl flex flex-wrap">
						<span className="text-yellow-600">Belfast</span>
						<span className="text-yellow-300">Estate</span>
					</h1>
				</Link>
				<form className="bg-yellow-100 p-3 flex items-center rounded-lg">
					<input
						type="text"
						placeholder="Search"
						className="bg-transparent focus:outline-none w-24 sm:w-64"
					/>
				</form>

				<ul className="flex gap-4">
					<Link to="/">
						<li className=" hidden sm:inline text-yellow-100 hover:underline">
							Home
						</li>
					</Link>
					<Link to="/about">
						<li className="hidden sm:inline text-yellow-100 hover:underline">
							About
						</li>
					</Link>
					<Link to="/sign-in">
						<li className="hidden sm:inline text-yellow-100 hover:underline">
							Sign In
						</li>
					</Link>
				</ul>
			</div>
		</header>
	);
}