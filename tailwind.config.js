/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        gray: {
          100: '#E1E1E6',
          300: '#8D8D99',
          600: '#323238',
          800: '#202024',
          900: '#121214'
        },
        orange: {
          400: '#FFD43A',
          600: '#E18700',
        }
      },
      keyframes: {
        pop: {
          '0%': { 
            opacity: 0,
            transform: 'scale(0.7, 0.7)', 
          },
          '100%': { 
            opacity: 1,
            transform: 'scale(1, 1)', 
          },
        }
      },
      animation: {
        pop: 'pop 1s'
      }
    },
  },
  plugins: [],
}
