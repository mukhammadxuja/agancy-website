module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'scale(1)',
            transform: 'translateX(0px)',
            transform: 'translateY(0px)',
          },
          '33%': {
            transform: 'scale(1.1)',
            transform: 'translateX(30px)',
            transform: 'translateY(30px)',
          },
          '66%': {
            transform: 'scale(0.9)',
            transform: 'translateX(50px)',
            transform: 'translateY(30px)',
          },
          '99%': {
            transform: 'scale(1)',
            transform: 'translateX(0px)',
            transform: 'translateY(0px)',
          },
        },
      },
    },
  },
  plugins: [],
};
