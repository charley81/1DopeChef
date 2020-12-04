import React from "react"
import Post from "./post"
import Banner from "../banner"
import { css } from "@emotion/core"

const Posts = ({ posts, title }) => {
  return (
    <section>
      <h3
        css={css`
          margin-bottom: 3rem;
          text-align: center;
        `}
      >
        {title}
      </h3>
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
