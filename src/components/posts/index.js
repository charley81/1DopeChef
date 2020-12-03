import React from "react"
import Post from "./post"
import Banner from "../banner"

const Posts = ({ posts, title }) => {
  return (
    <section>
      <h3>{title}</h3>
      <article>
        {posts.map(post => (
          <Post key={post.id} />
        ))}
      </article>
    </section>
  )
}

export default Posts
