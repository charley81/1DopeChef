import React from "react"
import { Global } from "@emotion/core"
import GlobalStyles from "../styles/globalSyles"
import Navbar from "./Navbar"

const Layout = ({ children }) => (
  <>
    <Global styles={GlobalStyles} />
    <Navbar />
    <main>{children}</main>
    <footer></footer>
  </>
)

export default Layout
