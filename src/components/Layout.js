import React, { useState } from "react"
import { Global } from "@emotion/core"
import GlobalStyles from "../styles/globalSyles"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Global styles={GlobalStyles} />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <main>{children}</main>
      <footer></footer>
    </>
  )
}

export default Layout
