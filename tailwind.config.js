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
      fontFamily:{
        pano: ["Panoptica W00 Script"],
       
        allerta: ['Allerta Stencil'],
        inter:['Inter'],
      
        64:['Sixtyfour'],
        whisper:["Whisper"],
        pacifico:["Pacifico"],
        montserrat:["Montserrat"],
        pintrest: ['HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', 'Helvetica', 'Arial', 'Lucida Grande', 'sans-serif']
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

