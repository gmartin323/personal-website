import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter, Routes, Route } from "react-router-dom"
import "https://kit.fontawesome.com/6b203b1712.js"

import Layout from "./components/Layout"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"


function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="portfolio" element={<Portfolio />}/>
                    <Route path="blog" element={<Blog />}/>
                    <Route path="contact" element={<Contact />}/>
                </Route>
            </Routes>
        </HashRouter>
    )
}


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
