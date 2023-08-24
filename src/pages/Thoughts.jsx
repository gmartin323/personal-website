import React, { useContext } from "react"
import { ThemeContext } from "../themes/ThemeContext"

export default function Blog() {
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
      {/* <h1>Blog</h1> */}
      <section className="cards-container" data-scroll>
        <div className="card"></div>
        <p className="card-info">Blog 1</p>
        <div className="card"></div>
        <p className="card-info">Blog 2</p>
        <div className="card"></div>
        <p className="card-info">Blog 3</p>
        <div className="card"></div>
        <p className="card-info">Blog 4</p>
        <div className="card"></div>
        <p className="card-info">Blog 5</p>
        <div className="card"></div>
        <p className="card-info">Blog 6</p>
        <div className="card"></div>
        <p className="card-info">Blog 7</p>
        <div className="card"></div>
        <p className="card-info">Blog 8</p>
      </section>
    </div>
  )
}