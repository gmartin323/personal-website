import React, { useContext, useRef, useEffect } from "react"
import { ThemeContext } from "../themes/ThemeContext"


export default function Portfolio() {
  const { theme } = useContext(ThemeContext) 

  return (
      <div 
        data-scroll-section
        className="page-container"
        style={{
          backgroundColor: theme.background,
          color: theme.color
        }}
      >
        <section 
          className="cards-container data-scroll"
        >
          <div className="card" style={{backgroundImage:"url(images/projects/ideal-food-picker-react.png)"}}></div>
          <p className="card-info">Ideal Food Picker</p>
          <div className="card"></div>
          <p className="card-info">Cooking Assistant</p>
          <div className="card"></div>
          <p className="card-info">Project 3</p>
          <div className="card"></div>
          <p className="card-info">Project 4</p>
          <div className="card"></div>
          <p className="card-info">Project 5</p>
          <div className="card"></div>
          <p className="card-info">Project 6</p>
          <div className="card"></div>
          <p className="card-info">Project 7</p>
          <div className="card"></div>
          <p className="card-info">Project 8</p>
        </section>
      </div>
  )
}