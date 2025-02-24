import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */


module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: "true",
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: colors.orange[50],
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: colors.green[600],
					lightest: colors.green[50],
					lighter: colors.green[200],
					light: colors.green[400],
					dark: colors.green[700],
					darker: colors.green[800],
					darkest: colors.green[900],
					foreground: "hsl(var(--background))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},

			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}, 
			keyframes: {
				"accordion-down": {
				  from: {
					height: "0",
				  },
				  to: {
					height: "var(--radix-accordion-content-height)",
				  },
				},
				"accordion-up": {
				  from: {
					height: "var(--radix-accordion-content-height)",
				  },
				  to: {
					height: "0",
				  },
				},
				shine: {
				  from: { backgroundPosition: "200% 0" },
				  to: { backgroundPosition: "-200% 0" },
				},
			  },
			  animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
				shine: "shine 8s ease-in-out infinite",
			  },
		}
	},
	plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
