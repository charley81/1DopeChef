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
      <div className="site">
        <Navbar toggle={toggle} />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <main
          css={css`
            width: 90vw;
            margin: 2rem auto 0;
            max-width: var(--maxWidth);
            flex-grow: 1;

            @media screen and (min-width: 1000px) {
              width: 95vw;
            }
          `}
        >
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
