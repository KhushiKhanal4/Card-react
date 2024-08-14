/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'bright_green': '37DA1C',
    },
    fontFamily: {
      sans: ['Roboto', 'Arial', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['Fira Code', 'monospace'],
    },
  },
  },
  plugins: [],
}

