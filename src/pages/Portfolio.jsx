import React, { useContext, useRef, useEffect } from "react"
import { ThemeContext } from "../themes/ThemeContext"
// import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import locomotiveScroll from "locomotive-scroll";

export default function Portfolio() {
  // const containerRef = useRef(null)

  const scrollRef = React.createRef();

  useEffect(() => {
    const scroll = new locomotiveScroll({
      // el: scrollRef.current,
      el: document.querySelector("[data-scroll-container]"),
      smooth: true
    });
  });
  
  const { theme } = useContext(ThemeContext) 

  return (
    // <LocomotiveScrollProvider options={options} containerRef={containerRef}>
      <div 
        data-scroll-container
        // ref={ref}
        ref={scrollRef}
        className="page-container"
        style={{
          backgroundColor: theme.background,
          color: theme.color
        }}
      >
        {/* <h1
         data-scroll 
         data-scroll-speed="3" 
         data-scroll-position="top"
        >
          Portfolio
        </h1> */}
        <section 
          className="cards-container"
          data-scroll-section
          data-scroll-speed="3" 
          data-scroll-position="top"
        >
          <div className="card" style={{backgroundImage:"url(images/projects/ideal-food-picker-react.png)"}}></div>
          <p className="card-info">Ideal Food Picker</p>
          <div className="card"></div>
          <p className="card-info">Recipe / Shopping Assistant</p>
          <div className="card"></div>
          <p className="card-info">Ideal Food Picker</p>
          <div className="card"></div>
          <p className="card-info">Ideal Food Picker</p>
        </section>
      </div>
    // </LocomotiveScrollProvider>
  )
}