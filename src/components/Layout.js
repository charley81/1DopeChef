import React, { useState } from "react"
import { Global, css } from "@emotion/core"
import GlobalStyles from "../styles/globalSyles"
import Navbar from "./navbar"
import Sidebar from "./sidebar"
import Footer from "./footer"

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
      <main
        css={css`
          width: 90vw;
          margin: 0 auto;
          max-width: var(--maxWidth);

          @media screen and (min-width: 1000px) {
            width: 95vw;
          }
        `}
      >
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
