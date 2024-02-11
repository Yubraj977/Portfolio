/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
        first:'#000000',
        second:'#FFFFFF',
        third:'#582233',
        fourth:'#430d27'
        

    },
  
    extend: {
      spacing: {
        side:'50px',
        top:'100px'
      },
      fontFamily:{
        pano: ["Panoptica W00 Script"],
        inika:['Inika']
      }
    },

  },
  plugins: [],
}

