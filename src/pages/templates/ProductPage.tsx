import React from "react"
import SEO from "../../components/SEO"
import Layout from "../../components/Layout"

class BlogPostLayout extends React.Component {
  public render() {
    const {title, author, date} = this.props.pageContext.frontmatter
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
          {this.props.children}
        </article>
      </Layout>
    )
  }
}

export default BlogPostLayout
