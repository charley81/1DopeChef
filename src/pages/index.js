import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"

const homePage = () => {
  return (
    <Layout>
      <Hero showChef={true} />
    </Layout>
  )
}

export default homePage
