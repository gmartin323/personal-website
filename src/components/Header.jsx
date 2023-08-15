import React, { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { ThemeContext } from "../themes/ThemeContext"


export default function Header() {

  const [isNavExpanded, setIsNavExpanded] = React.useState(false)
  const { theme, switchTheme } = useContext(ThemeContext)

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}

  function toggleNav() {
    setIsNavExpanded(!isNavExpanded)
  }

  return (
    <header 
      style={{
        backgroundColor: theme.background,
      }}
    >
      <Link 
        to="/" 
        className="site-logo" 
        onClick={() => setIsNavExpanded(false)}
        style={{
          color: theme.color
        }}
      >
        George Martin
      </Link>
      <p>React Developer</p>
      
      
      <nav className="navigation-menu">
        <NavLink 
          to="/portfolio"
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          Portfolio
        </NavLink>
        <NavLink 
          to="/blog"
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          Blog
        </NavLink>
        <NavLink 
          to="/contact"
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          Contact
        </NavLink>
      </nav>
      <button onClick={switchTheme}>
          {theme.id === "light" ? 
            <i className="fa-solid fa-sun fa-xl" style={{color: "#000000"}}></i> : 
            <i className="fa-solid fa-sun fa-xl" style={{color: "#ff6600"}}></i>
          }
        </button>
    </header>
  )
}