/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
 
  theme: {
    
  
    extend: {
      spacing: {
        side:'50px',
        top:'100px'
      },
      boxShadow: {
        custom: '0px 10px 30px rgba(47, 40, 43, 0.8)',
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
        fourth:'#430d27',
        fifth:"rgb(119, 119, 119)"
        

    },
    
    },

  },
  plugins: [
    require('flowbite/plugin')
  ],
}

