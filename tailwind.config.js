/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                baseBlack: '#333333',
                baseWhite: '#dddddd',
                darkWhite: '#121212',
            },
        },
    },
    plugins: [],
};
