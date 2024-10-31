/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        'node_modules/flowbite-react/lib/esm/**/*.js',
    ],
    theme: {
        extend: {
            colors: {
                // 'main-color': '#3454D1',
                'main-color': '#f59e0b',
                'main-color-dark': '#D78C0D',
                'main-white': '#F7F7FF',
                'main-dark': '#111827',
                'main-gray': '#EFEFEF',
                'main-black': '#090809',
            },
            fontFamily: {
                spartan: ['League Spartan', 'sans-serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [require('flowbite/plugin')],
};
