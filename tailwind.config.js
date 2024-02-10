/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                baseBlack: '#333333',
                twoBlack: '#6d6d6d',
                baseWhite: '#dddddd',
                darkWhite: '#121212',
            },
        },
    },
    plugins: [],
};
