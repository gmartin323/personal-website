import React from "react"
import { Link, NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <Link to="/">George Martin React Developer</Link>
      <nav>
        <NavLink to="/portfolio">Portfolio</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}