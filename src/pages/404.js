import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { css } from "@emotion/core"

const fourOhFour = () => {
  return (
    <Layout>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: calc(100vh - 280px);
          align-items: center;
          overflow: hidden;

          a {
            color: var(--primaryColor);
            transition: var(--transition);

            &:hover {
              transform: scale(1.1);
              color: var(--lighterText);
            }
          }
        `}
      >
        <h1>404</h1>
        <p>You must be lost</p>
        <Link to="/">Home</Link>
      </div>
    </Layout>
  )
}

export default fourOhFour
