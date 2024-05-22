/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			// backgroundImage: {
			// 	"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			// 	"gradient-conic":
			// 		"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			// 	"hero-pattern": "url('/img/hero-pattern.svg')",
			// 	"footer-texture": "url('/img/footer-texture.png')",
			// },
		},
	},
	darkMode: "class",
	plugins: [
		require('tailwind-scrollbar'),
		nextui()
	],
};
