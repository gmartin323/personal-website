import React, { useContext } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { ThemeContext } from "../themes/ThemeContext"

export default function Layout() {

  const { theme } = useContext(ThemeContext)  

  return (
    <div>
      <div 
        className="site-wrapper"
        style={{
          backgroundColor: theme.background,
          color: theme.color
      }}>
          <Header />
          <main>
            <Outlet />
          </main>
      </div>
      <Footer />
    </div>
  )
}