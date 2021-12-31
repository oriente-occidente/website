module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: '#81845C',
        black: {
          DEFAULT: '#000000',
          light: '#424242',
          medium: '#979797',
          transparent: 'rgba(0,0,0,0.43)',
        },
        gray: {
          DEFAULT: '#E2E2E2',
          light: '#F7F7F7',
          dark: '#332E2D'
        }
      },
      fontSize: {
        xxs: ['14px', '24px'],
        xs: ['16px', '20px'],
        sm: ['18px', '28px'],
        base: ['23px', '33px'],
        lg: ['30px', '40px'],
        xl: ['35px', '43px'],
        '2xl': ['40px', '52px'],
        '3xl': ['100px', '110px'],
        '4xl': ['140px', '150px'],
      },
      fontFamily: {
        serif: ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      height: {
        '50vh': '50vh',
        '80vh': '80vh',
        '90vh': '90vh',
      },
      backgroundImage: {
        'arrow-right': "url('/icone/arrow_long_right.svg')",
        'arrow-right-black': "url('/icone/arrow_long_right_black.svg')",
        'arrow-left': "url('/icone/arrow_long_left.svg')",
        'arrow-left-black': "url('/icone/arrow_long_left_black.svg')",
        'arrow-small-right': "url('/icone/arrow_small_right.svg')",
        open: "url('/icone/open.svg')",
        close: "url('/icone/close.svg')",
      },
    },
  },
  variants: {},
  corePlugins: {
    container: false,
  },
  plugins: [
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1280px',
          },
          '@screen 2xl': {
            maxWidth: '1380px',
          },
        },
      });
    },
  ],
};
