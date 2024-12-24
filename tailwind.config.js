/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      colors:{
        grey:'#E2E6E7',
        cream1:'#E4D4C8',
        cream2:'#D0B49F',
        dark:'#201A1E'
      },
      fontFamily:{
       ubuntu: ["Mina" ,"sans-serif"],
       funnel:["Funnel Display", 'sans-serif'],
       plex:["IBM Plex Mono", "serif"]
      }
    },
  },
  plugins: [],
}