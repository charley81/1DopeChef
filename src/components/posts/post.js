import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { Link } from "gatsby"

const PostStyles = styled("div")`
  margin-bottom: 5rem;
  border-bottom: 1px dotted var(--lightText);
  &:last-child {
    border-bottom: none;
  }

  .recipe-info {
    text-align: left;
  }

  .img {
    margin-bottom: 1rem;
    border-radius: var(--borderRadius);
    height: 17rem;
  }

  .link {
    color: var(--primaryColor);
    display: block;
    transition: var(--transition);
    padding-bottom: 1rem;

    &:hover {
      color: var(--secondaryColor);
    }
  }

  .category {
    display: inline-block;
    margin-bottom: 1rem;
    background: var(--secondaryColor);
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
    border-radius: var(--borderRadius);
    color: var(--darkText);
  }

  @media (min-width: 600px) {
    .img {
      height: 20rem;
    }
  }

  @media (min-width: 800px) {
    .img {
      height: 25rem;
    }
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 30rem 1fr;
    column-gap: 1.5rem;

    img {
      height: 100%;
      max-height: 20rem;
    }
  }
`

const Post = props => {
  const { title, image, slug, category } = props.node.frontmatter
  return (
    <PostStyles>
      <Img fluid={image.childImageSharp.fluid} className="img" />
      <div className="recipe-info">
        <span className="category">{category}</span>
        <h3>{title}</h3>
        <p>{props.node.excerpt}</p>
        <Link to={`/posts/${slug}`} className="link">
          Cont...
        </Link>
      </div>
    </PostStyles>
  )
}

export default Post
