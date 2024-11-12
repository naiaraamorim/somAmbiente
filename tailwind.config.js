/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  darkMode: 'class', // Permite alternar manualmente o modo escuro
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        fontTitulo: ['Onest']
      },
      colors: {
        darkBackground: '#212746',
        lightBackground: '#ffffff',
        primary: '#646cff',
        primaryDark: '#535bf2',
      },
    },
  },
  plugins: [],
};


