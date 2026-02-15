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
                    DEFAULT: '#2563EB', // Brand Blue
                    light: '#3B82F6',
                    dark: '#1E40AF',
                },
                accent: {
                    DEFAULT: '#F97316', // Brand Orange
                    hover: '#EA580C',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
