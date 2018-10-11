import React from 'react'
import Helmet from 'react-helmet'

export default function Template ({ data }) {
  const post = data.markdownRemark
  return (
    <div className="blog-post-container">
      <Helmet title={`Mazaher's blog - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  )
}
