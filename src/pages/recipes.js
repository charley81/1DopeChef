import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import Posts from "../components/posts/posts"

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
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
      <Posts posts={posts} title="Latest Sessions" />
    </Layout>
  )
}

export default recipesPage
