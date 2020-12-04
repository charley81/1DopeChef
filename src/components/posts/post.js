import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Post = props => {
  const { title, image, slug, category } = props.node.frontmatter

  return (
    <article>
      <Img fluid={image.childImageSharp.fluid} />
      <div className="recipe-info">
        <span className="category">{category}</span>
        <h3>{title}</h3>
        <p>{props.node.excerpt}</p>
        <Link to={`/posts/${slug}`} className="link">
          Cont...
          <IoMdArrowRoundForward />
        </Link>
      </div>
    </article>
  )
}

export default Post
