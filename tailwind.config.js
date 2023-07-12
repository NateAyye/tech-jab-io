/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*{.html,.js}', './views/**/*.handlebars', './tw.css'],
  theme: {
    extend: {
      fontFamily: {
        segoe: ['Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        consolas: ['Consolas', 'monospace'],
      },
      colors: {
        primary: {
          active: '#3cff',
          main: '#348eda',
          hover: '#276ca6',
          disabled: '#081825',
        },
        secondary: {
          active: '#e2e2d5',
          main: '#888883',
          hover: '#6b6b6b',
          disabled: '#121212',
        },
        info: {
          active: '#a88ce7',
          main: '#7646e7',
          hover: '#5b3ea0',
          disabled: '#282038',
        },
        success: {
          active: '#a8e78c',
          main: '#46e746',
          hover: '#3ea05b',
          disabled: '#203820',
        },
        warning: {
          active: '#e7c08c',
          main: '#e7a246',
          hover: '#a05b3e',
          disabled: '#382820',
        },
        danger: {
          active: '#e78c8c',
          main: '#e74646',
          hover: '#a03e3e',
          disabled: '#382020',
        },
        dark: {
          100: '#e2e2d5',
          200: '#888883',
          300: '#6b6b6b',
          400: '#121212',
        },
        light: {
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#6b7280',
        },
      },
    },
  },
  plugins: [],
};
