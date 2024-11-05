/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'sans-serif'],
        'lora-bold': ['Lora-Bold', 'sans-serif'],
        'lora-semi-bold': ['Lora-SemiBold', 'sans-serif'],
        montserrat: ['montserrat', 'sans-serif'],
        'montserrat-bold': ['Montserrat-Bold', 'sans-serif'],
        'montserrat-semi-bold': ['Montserrat-SemiBold', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
