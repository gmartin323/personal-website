import React, { useContext } from "react";
import { ThemeContext } from "../themes/ThemeContext";

export default function Footer() {

  const { theme } = useContext(ThemeContext)
  
  return (
    <footer 
      style={{
        backgroundColor: theme.footerBackground,
        color: theme.footerColor
      }}
    >
      Footer goes here
    </footer>
  )
}