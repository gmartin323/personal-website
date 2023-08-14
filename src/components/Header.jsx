import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {

  const [isNavExpanded, setIsNavExpanded] = React.useState(false)

  function toggleNav() {
    setIsNavExpanded(!isNavExpanded)
  }

  return (
    <header>
      <div className="header-top">
        <Link to="/" className="site-logo">GM</Link>
        <button class="hamburger-btn" onClick={toggleNav}><i class="fa-solid fa-bars fa-xl"></i></button>
      </div>
      <nav className={isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}