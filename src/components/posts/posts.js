import React from "react"
import Post from "./post"
import Banner from "../banner"

const Posts = ({ posts, title }) => {
  return (
    <section>
      <h3>{title}</h3>
      <div className="page-center">
        {/* recipe articles */}
        <article>
          {posts.map(post => (
            <Post key={post.node.id} {...post} />
          ))}
        </article>
        {/* side banner */}
        <article>
          <Banner />
        </article>
      </div>
    </section>
  )
}

export default Posts
