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

  const [timer, setTimer] = React.useState(3)

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
          <div className="loading-wrapper fade-out absolute">
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
              // ... all available Locomotive Scroll instance options 
              }
          }
          watch={
              [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
              ]
          }
          containerRef={containerRef}
      >   
        <div>
          <div 
            className="site-wrapper"
            style={{
              backgroundColor: theme.background,
              color: theme.color
          }}>
              <Header />
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