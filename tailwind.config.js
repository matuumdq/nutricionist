/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				panache: {
					50: "#f0f9f3",
					100: "#e3f5e9",
					200: "#c8ead5",
					300: "#9dd8b4",
					400: "#6bbd8b",
					500: "#46a169",
					600: "#358454",
					700: "#2d6845",
					800: "#275439",
					900: "#224531",
					950: "#0e2519",
				},
				"moody-blue": {
					50: "#f2f4fb",
					100: "#e7ebf8",
					200: "#d4d9f1",
					300: "#b9c0e8",
					400: "#9ca1dd",
					500: "#7a7acd",
					600: "#716ac1",
					700: "#6159a9",
					800: "#4f4a89",
					900: "#44416e",
					950: "#292640",
				},
			},
			keyframes: {
				wiggle: {
					"0%, 100%": {
						transform: "rotate(-3deg)",
					},
					"50%": {
						transform: "rotate(3deg)",
					},
				},
				"wiggle-more": {
					"0%, 100%": {
						transform: "rotate(-12deg)",
					},
					"50%": {
						transform: "rotate(12deg)",
					},
				},
				"rotate-y": {
					"0%": {
						transform: "rotateY(360deg)",
					},
					"100%": {
						transform: "rotateY(0)",
					},
				},
				"rotate-x": {
					"0%": {
						transform: "rotateX(360deg)",
					},
					"100%": {
						transform: "rotateX(0)",
					},
				},
				jump: {
					"0%, 100%": {
						transform: "scale(100%)",
					},
					"10%": {
						transform: "scale(80%)",
					},
					"50%": {
						transform: "scale(120%)",
					},
				},
				"jump-in": {
					"0%": {
						transform: "scale(0%)",
					},
					"80%": {
						transform: "scale(120%)",
					},
					"100%": {
						transform: "scale(100%)",
					},
				},
				"jump-out": {
					"0%": {
						transform: "scale(100%)",
					},
					"20%": {
						transform: "scale(120%)",
					},
					"100%": {
						transform: "scale(0%)",
					},
				},
				shake: {
					"0%": {
						transform: "translateX(0rem)",
					},
					"25%": {
						transform: "translateX(-1rem)",
					},
					"75%": {
						transform: "translateX(1rem)",
					},
					"100%": {
						transform: "translateX(0rem)",
					},
				},
				fade: {
					"0%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1",
					},
				},
				"fade-down": {
					"0%": {
						opacity: "0",
						transform: "translateY(-2rem)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				"fade-up": {
					"0%": {
						opacity: "0",
						transform: "translateY(2rem)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				"fade-left": {
					"0%": {
						opacity: "0",
						transform: "translateX(2rem)",
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)",
					},
				},
				"fade-right": {
					"0%": {
						opacity: "0",
						transform: "translateX(-2rem)",
					},
					"100%": {
						opacity: "1",
						transform: "translateX(0)",
					},
				},
				"flip-up": {
					"0%": {
						transform: "rotateX(90deg)",
						transformOrigin: "bottom",
					},
					"100%": {
						transform: "rotateX(0)",
						transformOrigin: "bottom",
					},
				},
				"flip-down": {
					"0%": {
						transform: "rotateX(-90deg)",
						transformOrigin: "top",
					},
					"100%": {
						transform: "rotateX(0)",
						transformOrigin: "top",
					},
				},
			},
			animation: {
				wiggle: "wiggle 1s both",
				"wiggle-more": "wiggle-more 1s both",
				"rotate-y": "rotate-y 1s both",
				"rotate-x": "rotate-x 1s both",
				jump: "jump .5s both",
				"jump-in": "jump-in .5s both",
				"jump-out": "jump-out .5s both",
				shake: "shake .5s both",
				fade: "fade 1s both",
				"fade-down": "fade-down 1s both",
				"fade-up": "fade-up 1s both",
				"fade-left": "fade-left 1s both",
				"fade-right": "fade-right 1s both",
				"flip-up": "flip-up 1s both",
				"flip-down": "flip-down 1s both",
			},
			animationDelay: {
				none: "0ms",
				0: "0ms",
				75: "75ms",
				100: "100ms",
				150: "150ms",
				200: "200ms",
				300: "300ms",
				500: "500ms",
				700: "700ms",
				1000: "1000ms",
			},
			animationDuration: {
				75: "75ms",
				100: "100ms",
				150: "150ms",
				200: "200ms",
				300: "300ms",
				500: "500ms",
				700: "700ms",
				1000: "1000ms",
			},
		},
	},
	plugins: [],
};
