/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
  
    extend: {
      spacing: {
        side:'50px',
        top:'70px'
      },
      fontFamily:{
        pano: ["Panoptica W00 Script"],
        inika:['Inika']
      },
      colors:{
        first:'#000000',
        second:'#FFFFFF',
        third:'#2d6cdf',
        fourth:'#430d27'
        

    },
    },

  },
  plugins: [],
}

