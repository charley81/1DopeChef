import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "@emotion/styled"

const SuccessStyles = styled("div")`
  text-align: center;
`

const successPage = () => {
  return (
    <Layout>
      <SuccessStyles>
        <h3>Thanks for subscribing! We've received your submission</h3>
        <Link to="/" className="btn">
          Back Home
        </Link>
      </SuccessStyles>
    </Layout>
  )
}

export default successPage
