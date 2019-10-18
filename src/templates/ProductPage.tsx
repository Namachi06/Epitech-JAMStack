import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import {StaticQuery, graphql} from "gatsby"

class BlogPostLayout extends React.Component {
  public render() {
    const post = this.props.data.markdownRemark
    console.log(this.props)
    return (
      <Layout location={"/shop/"}>
        <SEO title={post.frontmatter.title} />
        {/* <article>
          <header>
            <h1>{title}</h1>
            <br />
            <time>Date: {date}</time>
          </header>
          {this.props.children}
        </article> */}
      </Layout>
    )
  }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      frontmatter {
        battery
        charger
        color
        date
        driveSystem
        frontLed
        featuredImage
        path
        rearLight
        title
      }
    }
  }
`

export default BlogPostLayout
