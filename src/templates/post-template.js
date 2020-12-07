import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import Banner from "../components/banner"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "@emotion/styled"

export const query = graphql`
  query GetSinglePost($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        category
        date(formatString: "MMM Do, YYYY")
        readTime
        slug
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      body
    }
  }
`

const PostTemplate = ({ data }) => {
  const {
    mdx: {
      frontmatter: { title, category, image },
      body,
    },
  } = data
  return (
    <Layout>
      {/* post info */}
      <article>
        <Img fluid={image.childImageSharp.fluid} />
        <div className="post-info">
          <span>{category}</span>
          <h4>{title}</h4>
        </div>
        <MDXRenderer>{body}</MDXRenderer>
      </article>
      {/* banner */}
      <article>
        <Banner />
      </article>
    </Layout>
  )
}

export default PostTemplate
