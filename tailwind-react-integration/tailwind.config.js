/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: 'class', // Default is 'media'. Use 'class' to toggle dark mode manually.

  theme: {
    extend: {}, // Extend the default theme (add custom styles here)
  },

  // Configure variants for your project
  variants: {
    extend: {
      backgroundColor: ['active'], // Example: Add more utilities for specific states
      textColor: ['visited'],
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {},

}

