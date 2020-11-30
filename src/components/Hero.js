import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

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
    <header>{showChef && <Image fluid={chef.childImageSharp.fluid} />}</header>
  )
}

export default Hero
