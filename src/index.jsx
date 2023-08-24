import React, { useRef } from "react"
import ReactDOM from "react-dom/client"
import { HashRouter, Routes, Route } from "react-router-dom"
import "https://kit.fontawesome.com/6b203b1712.js"
import {themes, ThemeContext} from "./themes/ThemeContext"

import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import Layout from "./components/Layout"
import Self from "./pages/Self"
import Constructs from "./pages/Constructs"
import Thoughts from "./pages/Thoughts"
import Connect from "./pages/Connect"


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
                                <Route index element={<Self />} />
                                <Route path="constructs" element={<Constructs />}/>
                                <Route path="thoughts" element={<Thoughts />}/>
                                <Route path="connect" element={<Connect />}/>
                            </Route>
                        </Routes>
                    </LocomotiveScrollProvider>
                </ThemeContext.Provider>
            </HashRouter>
    )
}

ReactDOM.createRoot(document.getElementById('root'))
  .render(<App />);
