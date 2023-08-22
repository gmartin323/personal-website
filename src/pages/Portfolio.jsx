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
          className="cards-container"
        >
          <div className="card" style={{backgroundImage:"url(images/projects/ideal-food-picker-react.png)"}}></div>
          <p className="card-info">Ideal Food Picker</p>
          <div className="card"></div>
          <p className="card-info">Recipe / Shopping Assistant</p>
          <div className="card"></div>
          <p className="card-info">Ideal Food Picker</p>
          <div className="card"></div>
          <p className="card-info">Ideal Food Picker</p>
          <div className="card"></div>
          <p className="card-info">Ideal Food Picker</p>
          <div className="card"></div>
          <p className="card-info">Ideal Food Picker</p>
          <div className="card"></div>
          <p className="card-info">Ideal Food Picker</p>
          <div className="card"></div>
          <p className="card-info">Ideal Food Picker</p>
          <div className="card"></div>
          <p className="card-info">Ideal Food Picker</p>
        </section>
      </div>
  )
}