import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		//port: 3000,
		// proxy: {
		// 	'/api': {
		// 		target: 'http://localhost:5000',
		// 		secure: false,
		// 		changeOrigin: true,
		// 		rewrite: (path) => path.replace(/^\/api/, '/api'),
		// 	},
		// },
	},
	plugins: [react()],
});
