import React, { useContext } from "react"
import { ThemeContext } from "../themes/ThemeContext"
import { useLocomotiveScroll } from 'react-locomotive-scroll'

export default function Home() {
  const { theme } = useContext(ThemeContext) 
  const { scroll } = useLocomotiveScroll()

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