import React, { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { ThemeContext } from "../themes/ThemeContext"


export default function Header() {

  const [isNavExpanded, setIsNavExpanded] = React.useState(false)
  const { theme, switchTheme } = useContext(ThemeContext)
  console.log(theme)

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}

  function toggleNav() {
    setIsNavExpanded(!isNavExpanded)
  }

  return (
    <header>
      <div 
        className="header-top"
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color
        }}
      >
        <Link 
          to="/" 
          className="site-logo" 
          onClick={() => setIsNavExpanded(false)}
        >
          GM
        </Link>
        <button onClick={switchTheme}>
          <i className="fa-solid fa-sun fa-xl"></i>
          <i className="fa-regular fa-sun fa-xl"></i>
        </button>
        <button className="hamburger-btn" onClick={toggleNav}><i className="fa-solid fa-bars fa-xl"></i></button>
      </div>
      <nav className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <NavLink 
          to="/portfolio"
          style={({ isActive }) => isActive ? activeStyles : null}
          onClick={() => setIsNavExpanded(false)}
        >
          Portfolio
        </NavLink>
        <NavLink 
          to="/blog"
          style={({ isActive }) => isActive ? activeStyles : null}
          onClick={() => setIsNavExpanded(false)}
        >
          Blog
        </NavLink>
        <NavLink 
          to="/contact"
          style={({ isActive }) => isActive ? activeStyles : null}
          onClick={() => setIsNavExpanded(false)}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  )
}