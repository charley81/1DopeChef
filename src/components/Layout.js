import React from "react"
import { Global } from "@emotion/core"
import GlobalStyles from "../styles/globalSyles"

const Layout = ({ children }) => (
  <>
    <Global styles={GlobalStyles} />
    <header></header>
    <main>{children}</main>
    <footer></footer>
  </>
)

export default Layout
