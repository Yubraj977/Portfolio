
import Nav from './mainComponents/Nav'
import ReactGA from "react-ga4";
import AnimatedCursor from "react-animated-cursor"
import { useEffect } from 'react';
function App() {

useEffect(() => {
  ReactGA.initialize("G-B025WMCV1E");
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });

}, [])




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
    backgroundColor: '#c9d5e1'
  }}
  outerStyle={{
    border: '3px solid #c9d5e1'
  }}
/>

      <Nav/>

      
    </>
  )
}

export default App
