/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "RobotoBold", "BeVietnamPro", "BeVietnamBold"],
        'be-vietnam': ['"Be Vietnam Pro"', 'sans-serif'],
        'inter': ['Inter'],
        'poppins': ['Poppins'],
        'rubik': ['Rubik']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'full': '9999px',
        'large': '12px',
        'xl': '20px'
      },
      colors: {
        primary: '#2e9fad',
        hoverPrimary: '#d9f6f8',
        secondary: '#596780',
        grayLight: '#00000099',
        darkBlue: '#0C1C37',
        theme_color: "#3C08A0",
        darkPink: "#EC1E79",
        darkOrange: "#F7931E",
        lightBlue: '#6DB2E3',
        fairBlue: "#E4F2F9",
      },
      width: {
        lgMain: '85%'
      }
    },
  },
  plugins: [

  ],
}

