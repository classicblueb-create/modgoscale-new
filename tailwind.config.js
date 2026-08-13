/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                display: ['Satoshi', 'Kanit', 'sans-serif'],
                body: ['Satoshi', 'Kanit', 'sans-serif'],
                kanit: ['Kanit', 'sans-serif'],
            },
            colors: {
                eggshell: '#F9F8F4',
                'text-main': '#111111',
                'text-muted': '#666666',
                'border-color': '#E6E4DD',
            },
            animation: {
                'blob': 'blob 7s infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
            },
        },
    },
    plugins: [],
}
