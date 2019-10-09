import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO";

const BlogIndex = ({data}) => {
  const {edges: posts} = data.allMdx
  return (
    <Layout>
      <SEO title="Blog page" />
      {posts.map(({node}) => {
        const {title, author} = node.frontmatter
        return (
          <div key={node.id}>
            <header>
              <Link to={node.fields.slug}>{title}</Link>
              <div>Posting By {author}</div>
            </header>
            <hr />
          </div>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query blogIndex {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            author
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
