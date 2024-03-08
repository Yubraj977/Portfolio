
import './App.css'
import Nav from './mainComponents/Nav'

import AnimatedCursor from "react-animated-cursor"

function App() {





  return (
    <>
 <AnimatedCursor
  innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: '#333'
  }}
  outerStyle={{
    border: '3px solid #333'
  }}
/>

      <Nav/>

      
    </>
  )
}

export default App
