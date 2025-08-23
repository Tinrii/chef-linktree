const flowbite = require("flowbite-react/tailwind");
const {heroui} = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        flowbite.content(),
        "./node_modules/@heroui/theme/dist/components/(slider|popover).js",
    ],
    theme: {
        extend: {
            fontFamily: {
                exampleFont: ['font-name', 'sans-serif'],
            },
        },
    },
    plugins: [
        flowbite.plugin(),
        heroui(),
    ],
};