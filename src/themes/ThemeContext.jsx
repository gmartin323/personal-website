import React from "react"

export const themes = {
  light: {
    id: "light",
    color: "#000000",
    background: "#FFFFFF",
    footerColor: "#aaaaaa",
    footerBackground: "#161616"
  },
  dark: {
    id: "dark",
    color: "#FFFFFF",
    background: "#000000",
    footerColor: "#161616",
    footerBackground: "#aaaaaa"
  }
}

export const ThemeContext = React.createContext(themes.light)