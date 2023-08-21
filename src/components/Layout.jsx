import React, { useContext, useRef } from "react"
import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import { ThemeContext } from "../themes/ThemeContext"
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

export default function Layout() {

  const { theme } = useContext(ThemeContext)  

  const containerRef = useRef(null)

  return (
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
  )
}