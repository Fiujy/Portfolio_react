/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '101': '1.015',
      },
      colors: {
        // primary: '#7e22ce',
        // accent: '#581c87',
        // dark: '#581c87',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#7e22ce",
          accent: "#581c87",
          neutral: '#581c87',
        },
      },
    ],
  },
}

