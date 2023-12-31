import React, { useContext } from "react"
import { ThemeContext } from "../themes/ThemeContext"

export default function Self() {
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
      <section className="home-page-content-container">
        <h1>George Martin <br />React Developer</h1>
      </section>
    </div>
  )
}