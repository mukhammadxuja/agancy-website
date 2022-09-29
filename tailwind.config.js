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
      colors: {
        main: 'var(--color-text-main)',
        muted: 'var(--color-text-muted)',
        own: 'var(--color-text-own)',
        darkBG: 'var(--color-bg-dark)',
      },
      animation: {
        blob: 'blob 7s infinite',
        marquee: 'marquee 5s linear infinite',
        rotate: 'rotate 10s linear infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'scale(1)',
            transform: 'translateX(0px)',
            transform: 'translateY(0px)',
            background: '#ff6f69 ',
          },
          '25%': {
            transform: 'scale(1.1)',
            transform: 'translateX(30px)',
            transform: 'translateY(30px)',
            background: '#ffcc5c ',
          },
          '50%': {
            transform: 'scale(0.9)',
            transform: 'translateX(50px)',
            transform: 'translateY(30px)',
            background: '#88d8b0',
          },
          '75%': {
            transform: 'scale(1.1)',
            transform: 'translateX(0px)',
            transform: 'translateY(0px)',
            background: '#8b9dc3 ',
          },
          '100%': {
            transform: 'scale(1)',
            transform: 'translateX(0px)',
            transform: 'translateY(0px)',
            background: '#ff6f69 ',
          },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
