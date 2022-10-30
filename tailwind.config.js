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
                'royal-purple-light': '#B08CEB',
                'another-purple': '#9F8CEB',
            },
            backgroundImage: {
                background1: "url('../asset/img/bg-mutelu.jpg')",
            },
            fontFamily: {
                Inter: ['Inter', 'sans-serif'],
            },
        },
        container: {
            center: true,
        },
    },
    plugins: [],
}
