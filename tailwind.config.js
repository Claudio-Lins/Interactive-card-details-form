/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-desktop' : "url('/images/bg-main-desktop.png')",
        'card-front' : "url('/images/bg-card-front.png')",
        'card-back' : "url('/images/bg-card-back.png')",
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
