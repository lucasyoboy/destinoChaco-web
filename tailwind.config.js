/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#36a027",
          "secondary": "#376b15",        
          "accent": "#efefef",
          "base-100": "#282828",
          },
        },
      ],
    },
  plugins: [
    require('daisyui'),
  ],
}

