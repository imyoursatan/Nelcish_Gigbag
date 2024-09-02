/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Rubik', 'sans-serif'],
			},
			colors: {
				primary: 'grey',
				secondary: 'red',
			},
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem',
					sm: '3rem',
				},
			},
		},
	},
	plugins: [],
};
