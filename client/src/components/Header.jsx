// import { FaSearch } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// export default function Header() {
// 	return (
// 		<header className="bg-slate-700 shadow-md py-2">
// 			<div className="flex justify-between items-center max-w-6xl mx-auto p-3">
// 				<Link to="/">
// 					<h1 className="font-bold text-sm text-xl flex flex-wrap">
// 						<span className="text-orange-500">Ka</span>
// 						<span className="text-orange-200">ta</span>
// 					</h1>
// 				</Link>

// 				<form className="bg-yellow-100 p-3 flex items-center rounded-lg">
// 					<FaSearch className="text-orange-500 mr-2" />
// 					<input
// 						type="text"
// 						placeholder="Search"
// 						className="bg-transparent focus:outline-none w-24 sm:w-64"
// 					/>
// 				</form>

// 				<ul className="flex gap-4">
// 					<Link to="/">
// 						<li className="hidden sm:inline text-yellow-100 hover:text-yellow-500">
// 							Home
// 						</li>
// 					</Link>
// 					<Link to="/about">
// 						<li className="hidden sm:inline text-yellow-100 hover:text-yellow-500">
// 							About
// 						</li>
// 					</Link>
// 					<Link to="/sign-in">
// 						<li className="sm:inline text-yellow-100 hover:text-yellow-500">
// 							Sign In
// 						</li>
// 					</Link>
// 				</ul>
// 			</div>
// 		</header>
// 	);
// }

import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<>
			<header className="bg-white shadow-md py-4">
				<div className="flex justify-between items-center max-w-6xl mx-auto px-4">
					<Link to="/">
						<h1 className="font-bold text-2xl flex items-center">
							<span className="text-indigo-600">Ka</span>
							<span className="text-gray-800">ta</span>
						</h1>
					</Link>
					<form className="bg-gray-100 p-2 flex items-center rounded-lg">
						<FaSearch className="text-gray-500 mr-2" />
						<input
							type="text"
							placeholder="Search"
							className="bg-transparent focus:outline-none w-24 sm:w-64"
						/>
					</form>
					<ul className="flex gap-4">
						<Link to="/">
							<li className="hidden sm:inline text-gray-600 hover:text-indigo-600">
								Home
							</li>
						</Link>
						<Link to="/about">
							<li className="hidden sm:inline text-gray-600 hover:text-indigo-600">
								About
							</li>
						</Link>
						<Link to="/sign-in">
							<li className="sm:inline text-gray-600 hover:text-indigo-600">
								Sign In
							</li>
						</Link>
					</ul>
				</div>
			</header>
		</>
	);
}
