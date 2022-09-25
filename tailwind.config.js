module.exports = {
  purge: ['./src/**/*.{html,js}'],
  mode: 'jit',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        'main-span': '72px',
      },
      colors: {
        'fb-bg': '#18191a',
        'fb-header': '#242526',
        'fb-input': '#3a3b3c',
        'fb-popover': '#3e4042',
        'fb-active': '#323346',
        'fb-card': '#242526',
        'fb': '#2e89ff',
        'fb-light-bg': '#EFF2F5',
        'fb-light-input': '#D6D7DA',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
