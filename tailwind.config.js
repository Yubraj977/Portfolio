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
        top:'100px'
      },
      boxShadow: {
        custom: '0px 10px 30px rgba(242, 229, 236, 0.2)',
      },
      fontFamily:{
        pano: ["Panoptica W00 Script"],
       
        allerta: ['Allerta Stencil'],
        inter:['Inter'],
      
        64:['Sixtyfour'],
        whisper:["Whisper"],
        pacifico:["Pacifico"],
        montserrat:["Montserrat"],
       
      },
      colors:{
        first:'rgb(25,25,25)',
        second:'#FFFFFF',
        third:'#2d6cdf',
        fourth:'#430d27',
        fifth:"rgb(119, 119, 119)"
        

    },
    
    },

  },
  plugins: [],
}

