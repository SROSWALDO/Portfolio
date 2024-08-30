/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        audiowide: ['Audiowide', 'sans-serif'],
        russo: ['Russo one', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif']
      },
      boxShadow: {
        'glow': '0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.3)',
      },
      textShadow: {
        'custom': '0 0 1px #54c1f8, 0 0 4px #54c1f8, 0 0 1px #54c1f8',
      },
    },
  },
  plugins: [],
}