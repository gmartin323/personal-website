import React, { useContext } from "react"
import { ThemeContext } from "../themes/ThemeContext"

export default function Blog() {

  const { theme } = useContext(ThemeContext)

  return (
    <div 
      className="page-container"
      style={{
        backgroundColor: theme.background,
        color: theme.color
      }}
    >
      <h1>Blog</h1>
      <section className="cards-container">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </section>
    </div>
  )
}