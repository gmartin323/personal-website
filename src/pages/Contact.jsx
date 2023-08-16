import React, { useContext }  from "react"
import { ThemeContext } from "../themes/ThemeContext"

export default function Contact() {

  
  const { theme } = useContext(ThemeContext)

  return (
    <div 
      className="page-container"
      style={{
        backgroundColor: theme.background,
        color: theme.color
      }}
    >
      <section className="contact-page-content-container short">
        <h1>Contact Page goes here</h1> 
      </section>
      <section className="contact-page-links-container">
        <a 
          href="https://www.linkedin.com/in/george-martin-redev/"
          className="contact-link"
        >
          {theme.id === "light" ? 
          <i className="fa-brands fa-linkedin" style={{color: "#000000"}}></i> :
          <i className="fa-brands fa-linkedin" style={{color: "#ffffff"}}></i>
          }
        </a>
        <a 
          href="https://github.com/gmartin323"
        >
          {theme.id === "light" ? 
            <i className="fa-brands fa-square-github" style={{color: "#000000"}}></i> :
            <i className="fa-brands fa-square-github" style={{color: "#ffffff"}}></i>
          }
        </a>
        <a 
          href=""
        >
          {theme.id === "light" ? 
            <i className="fa-brands fa-square-threads" style={{color: "#000000"}}></i>:
            <i className="fa-brands fa-square-threads" style={{color: "#ffffff"}}></i>
          }
        </a>
        <a 
          href="mailto:gmartin323@gmail.com"
        >
          {theme.id === "light" ? 
            <i className="fa-solid fa-square-envelope" style={{color: "#000000"}}></i>:
            <i className="fa-solid fa-square-envelope" style={{color: "#ffffff"}}></i>
          }
        </a>

      </section>
    </div>
  )
}