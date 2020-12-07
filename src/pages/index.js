import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import { css } from "@emotion/core"

const homePage = () => {
  return (
    <div
      css={css`
        height: 100vh;
        overflow: hidden;
      `}
    >
      <Layout>
        <Hero showChef={true} />
      </Layout>
    </div>
  )
}

export default homePage
