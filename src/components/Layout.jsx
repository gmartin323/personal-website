import React, { useContext, useRef, useEffect } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { ThemeContext } from "../themes/ThemeContext"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

export default function Layout() {
  
  const { theme } = useContext(ThemeContext)  
  const containerRef = useRef(null)

  const [preloader, setPreloader] = React.useState(true)

  const [timer, setTimer] = React.useState(4)

  const id = useRef(null)

  const clear = () => {
    window.clearInterval(id.current)
    setPreloader(false)
  }

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer(timer => timer - 1)
    }, 1000)
  }, [])

  useEffect(() => {
    if (timer === 0) {
      clear()
    }
   }, [timer])

  return (
    <>
      {preloader ? (
        <>
          <div className="loading-wrapper fade-in-out absolute">
            <h1>George Martin</h1>
            <h2>React Developer</h2>
          </div>
          <div className="fade-out-delay absolute behind"></div>
        </>
      ) : null }
      <LocomotiveScrollProvider
          options={
              {
              smooth: true,
              }
          }
          watch={
              []
          }
          containerRef={containerRef}
      > 
        <div className="mask"></div>  
        <div>
          <div
            className="site-wrapper"
            style={{
              backgroundColor: theme.background,
              color: theme.color
          }}>
            <Header />
            {/* <main> */}
            <main data-scroll-container ref={containerRef}>
              <Outlet />
            </main>
          </div>
          <Footer />
        </div>
      </LocomotiveScrollProvider>  
    </>
  )
}