/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1e3a8a', // vibrant deep blue
                    light: '#3b82f6',
                    dark: '#1e293b',
                },
                accent: {
                    DEFAULT: '#0ea5e9', // bright sky blue
                    hover: '#0284c7',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
