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
                mutelu_1: "url('../public/img/bg-mutelu.jpg')",
                mutelu_2: "url('/public/img/bg-mutelu2.jpg')",
                tube: "url('/public/img/tube.jpeg')",
                horoscope: "url('../public/img/horoscope.png')",
                magic: "url('../public/img/black.jpg')",
                bank: "url('../public/img/bank.jpg)",
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
