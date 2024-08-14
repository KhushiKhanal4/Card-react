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
    textShadow: {
      'default': '2px 2px 4px rgba(0, 0, 0, 0.1)',
      'md': '4px 4px 8px rgba(0, 0, 0, 0.2)',
      'lg': '6px 6px 12px rgba(0, 0, 0, 0.3)',
    }
  },
  },
  plugins: [function({ addUtilities }) {
    addUtilities({
      '.text-shadow': {
        textShadow: '1px 1px 2.5px rgb(0, 0, 0,0.5)',
      },
      '.text-shadow-md': {
        textShadow: '4px 4px 8px rgba(0, 0, 0)',
      },
      '.text-shadow-lg': {
        textShadow: '6px 6px 12px rgba(0, 0, 0)',
      },
    })
  }
]
}

