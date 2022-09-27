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
        skin: {
          main: 'var(--color-text-main)',
          secondary: 'var(--color-text-secondary)',
          base: 'var(--color-text-base)',
          muted: 'var(--color-text-muted)',
          white: 'var(--color-text-white)',
          dark_main_bg: 'var(--dark-main-bg)',
          dark_secondary_bg: 'var(--dark-secondary-bg)',
          dark_text: 'var(--dark-text-color)',
          dark_text_muted: 'var(--dark-text-muted)',
        },
      },
      animation: {
        blob: 'blob 7s infinite',
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
      },
    },
  },
  plugins: [],
};
