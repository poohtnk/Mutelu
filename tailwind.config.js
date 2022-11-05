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
                mutelu_1: "url('../asset/img/bg-mutelu.jpg')",
                mutelu_2: "url('../asset/img/bg-mutelu2.jpg')",
                tube: "url('../asset/img/tube.jpeg')",
                horoscope: "url('../asset/img/horoscope.png')",
                magic: "url('../asset/img/black.jpg')",
            },
            fontFamily: {
                Inter: ['Inter', 'sans-serif'],
            },
        },
        container: {
            center: true,
        },
    },
    plugins: [require('@tailwindcss/line-clamp')],
}
