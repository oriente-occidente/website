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
          transparent: 'rgb(0 0 0 / 80%)',
        },
        gray: {
          DEFAULT: '#E5E5E5',
          light: '#F7F7F7',
        }
      },
      fontSize: {
        xxs: ['14px', '24px'],
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
      height: {
        '50vh': '50vh',
        '80vh': '80vh',
        '90vh': '90vh',
      },
      backgroundImage: {
        'arrow-left': "url('/icone/arrow_long_left.svg')",
        'arrow-right': "url('/icone/arrow_long_right.svg')",
      }
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
  corePlugins: {
    container: false
  },
  plugins: [
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
        }
      })
    }
  ]
};
