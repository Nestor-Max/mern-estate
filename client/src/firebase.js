// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	authDomain: 'kata-9aa2a.firebaseapp.com',
	projectId: 'kata-9aa2a',
	storageBucket: 'kata-9aa2a.appspot.com',
	messagingSenderId: '729959484913',
	appId: '1:729959484913:web:10f4c291674b2a7f704850',
	measurementId: 'G-CSEN87JPQ3',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
