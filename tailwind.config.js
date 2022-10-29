/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'royal-purple': '#5949d9',
            },
            backgroundImage: {
                background1: "url('../asset/img/bg-mutelu.jpg')",
            },
        },
        container: {
            center: true,
        },
    },
    plugins: [],
}
