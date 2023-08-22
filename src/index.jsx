import React, { useRef } from "react"
import ReactDOM from "react-dom/client"
import { HashRouter, Routes, Route } from "react-router-dom"
import "https://kit.fontawesome.com/6b203b1712.js"
import {themes, ThemeContext} from "./themes/ThemeContext"

import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import Layout from "./components/Layout"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"


function App() {
    const containerRef = useRef(null)

    


    function switchTheme() {
        setSiteTheme((prevTheme) => ({
            theme: prevTheme.theme === themes.dark ? themes.light : themes.dark,
            switchTheme
        }))
    }

    const [siteTheme, setSiteTheme] = React.useState({
        theme: themes.light,
        switchTheme
    })


    return (
            <HashRouter>
                <ThemeContext.Provider value={siteTheme}>
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
                        <Routes>
                            <Route path="/" element={<Layout />}>
                                <Route index element={<Home />} />
                                <Route path="portfolio" element={<Portfolio />}/>
                                <Route path="blog" element={<Blog />}/>
                                <Route path="contact" element={<Contact />}/>
                            </Route>
                        </Routes>
                    </LocomotiveScrollProvider>
                </ThemeContext.Provider>
            </HashRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root'))
  .render(<App />);
