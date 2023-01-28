/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./public/**.{html,js,css}", 
    "./views/*.ejs" //wild card for all ejs files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
