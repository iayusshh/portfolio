/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050611',
          900: '#090B1A',
          800: '#0E1025',
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.08), 0 10px 40px rgba(0,0,0,0.45)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        floaty: 'floaty 5s ease-in-out infinite',
        shimmer: 'shimmer 10s ease infinite',
      },
    },
  },
  plugins: [],
}

