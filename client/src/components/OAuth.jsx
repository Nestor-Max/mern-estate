import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { useDispatch } from 'react-redux';
import { app } from '../firebase';
import { SignInSuccess } from '../redux/user/userSlice';

export default function OAuth() {
	const dispatch = useDispatch();
	const handleGoogleClick = async () => {
		try {
			const provider = new GoogleAuthProvider();
			const auth = getAuth(app);
			const result = await signInWithPopup(auth, provider);
			console.log(result);

			const res = await fetch('/api/auth/google', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: result.user.displayName,
					email: result.user.email,
					photo: result.user.photoURL,
				}),
			});
			const data = await res.json();
			dispatch(SignInSuccess(data));
		} catch (error) {
			console.log('Could not sign in with google', error);
		}
	};
	return (
		<button
			onClick={handleGoogleClick}
			type="button"
			className="bg-red-600 text-white p-3 rounded-lg uppercase hover:bg-red-700 disabled:bg-red-400"
		>
			Continue with google
		</button>
	);
}
