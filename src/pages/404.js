import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import styled from "@emotion/styled"

const ErrorStyles = styled("div")`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  text-align: center;
  margin: 24vh 0;

  h1 {
    font-family: "Raleway", sans-serif;
    font-size: 8rem;
  }

  a {
    color: var(--primaryColor);
    transition: var(--transition);

    &:hover {
      transform: scale(1.1);
      color: var(--lighterText);
    }
  }
`

const fourOhFour = () => {
  return (
    <Layout>
      <ErrorStyles>
        <h1>404</h1>
        <p>This Page Doesn't Exist</p>
        <Link to="/">Home</Link>
      </ErrorStyles>
    </Layout>
  )
}

export default fourOhFour
