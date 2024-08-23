/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
    backgroundImage: {
      'connect-texture': "url('./assets/bg.jpg')",
    }
  }