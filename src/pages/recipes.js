import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            slug
            date(formatString: "MMMM Do, YYYY")
            category
            readTime
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

const recipesPage = ({ data }) => {
  const {
    allMdx: { edges: posts },
  } = data

  return (
    <Layout>
      <h3>Recipes</h3>
      <Posts posts={posts} title="recently published" />
    </Layout>
  )
}

export default recipesPage
