module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: '#81845C',
        black: {
          DEFAULT: '#000000',
          light: '#424242',
          medium: '#979797',
          transparent: 'rgb(0 0 0 / 60%)',
        },
        gray: {
          DEFAULT: '#E5E5E5',
          light: '#F7F7F7',
        }
      },
      fontSize: {
        xs: ['16px', '20px'],
        sm: ['18px', '28px'],
        base: ['23px', '38px'],
        lg: ['30px', '40px'],
        xl: ['35px', '43px'],
        '2xl': ['40px', '52px'],
        '3xl': ['100px', '110px'],
        '4xl': ['140px', '150px'],
      },
      fontFamily: {
        'serif': ['Poppins', 'sans-serif'],
        'sans': ['Poppins', 'sans-serif']
      },
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen 2xl': {
            maxWidth: '1380px',
          },
        }
      })
    }
  ],
  variants: {},
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
