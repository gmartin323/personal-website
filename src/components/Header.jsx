import React, { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { ThemeContext } from "../themes/ThemeContext"


export default function Header() {

  const { theme, switchTheme } = useContext(ThemeContext)

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}

  return (
    <header
      style={{
        backgroundColor: theme.headerBackground,
      }}
    >
      <Link 
        to="/" 
        className="site-logo"
        style={{
          color: theme.color
        }}
      >
        George Martin
      </Link>
      <p>React Developer</p>
      
      
      <nav className="navigation-menu">
        <NavLink 
          to="/"
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          Self
        </NavLink>
        <NavLink 
          to="/constructs"
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          Contructs
        </NavLink>
        <NavLink 
          to="/thoughts"
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          Thoughts
        </NavLink>
        <NavLink 
          to="/connect"
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          Connect
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