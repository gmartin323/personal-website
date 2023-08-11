import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import Blog from "./pages/Blog"
import Contact from "./pages/Contact"


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="portfolio" element={<Portfolio />}/>
                    <Route path="blog" element={<Blog />}/>
                    <Route path="contact" element={<Contact />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
