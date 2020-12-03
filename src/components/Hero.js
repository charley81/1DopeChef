import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { css } from "@emotion/core"

const query = graphql`
  {
    chef: file(relativePath: { eq: "chef.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Hero = ({ showChef }) => {
  const { chef } = useStaticQuery(query)

  return (
    <header
      css={css`
        text-align: center;

        .hero-img {
          max-width: 700px;
          max-height: 100%;
          margin: auto;

          @media screen and (min-width: 1200px) {
            transform: translate(40%, 0%);
          }
        }

        span {
          color: var(--primaryColor);
        }
      `}
    >
      <h1>
        1<span>D</span>ope<span>C</span>hef
      </h1>
      <p>Access recipes from the menu</p>
      {showChef && (
        <Image fluid={chef.childImageSharp.fluid} className="hero-img" />
      )}
    </header>
  )
}

export default Hero
