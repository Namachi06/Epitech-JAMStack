import React from "react"
import SEO from "../SEO"
import Layout from "../Layout"

function BlogPostLayout({children, pageContext}) {
  const {title, author, date} = pageContext.frontmatter
  return (
    <Layout>
      <SEO title={title} />
      <article>
        <header>
          <h1>{title}</h1>
          <span>Author: {author}</span>
          <br />
          <time>Date: {date}</time>
        </header>
        {children}
      </article>
    </Layout>
  )
}

export default BlogPostLayout
