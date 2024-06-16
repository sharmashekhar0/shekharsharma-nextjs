import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import svgToDataUri from "mini-svg-data-uri";
import colors from "tailwindcss/colors";

function flattenColors(colors: any) {
	const result: { [key: string]: any } = {};

	function flatten(obj: any, prefix = "") {
		for (const key in obj) {
			const value = obj[key];
			const newKey = prefix ? `${prefix}-${key}` : key;
			if (typeof value === "object" && value !== null) {
				flatten(value, newKey);
			} else {
				result[newKey] = value;
			}
		}
	}

	flatten(colors);
	return result;
}

// Plugin to add each Tailwind color as a global CSS variable
function addVariablesForColors({ addBase, theme }: any) {
	const allColors = flattenColors(theme("colors"));
	const newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, value]) => [`--${key}`, value])
	);

	addBase({
		":root": newVars,
	});
}

// Plugin to add SVG patterns
function addSvgPatterns({ matchUtilities, theme }: any) {
	matchUtilities(
		{
			"bg-grid": (value: any) => ({
				backgroundImage: `url("${svgToDataUri(
					`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
				)}")`,
			}),
			"bg-grid-small": (value: any) => ({
				backgroundImage: `url("${svgToDataUri(
					`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
				)}")`,
			}),
			"bg-dot": (value: any) => ({
				backgroundImage: `url("${svgToDataUri(
					`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
				)}")`,
			}),
		},
		{ values: flattenColors(theme("backgroundColor")), type: "color" }
	);
}

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: "class",
	theme: {
		extend: {
			animation: {
				"meteor-effect": "meteor 5s linear infinite",
			},
			keyframes: {
				meteor: {
					"0%": {
						transform: "rotate(215deg) translateX(0)",
						opacity: "1",
					},
					"70%": { opacity: "1" },
					"100%": {
						transform: "rotate(215deg) translateX(-500px)",
						opacity: "0",
					},
				},
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [addVariablesForColors, addSvgPatterns],
};

export default config;
