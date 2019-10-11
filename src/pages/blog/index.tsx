import React from "react"
import {graphql, Link} from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO";

function BlogIndex({data}) {
  const {edges: posts} = data.allMdx
  return (
    <Layout>
      <SEO title={"List"} />
      {posts.map(({node}) => {
        const {title, author, date} = node.frontmatter
        return (
          <div key={node.id}>
            <header>
              <div>{title}</div>
              <div>{date}</div>
              <div>Posting By {author}</div>
            </header>
            <Link to={node.fields.slug}>View Article</Link>
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
          fields {
            slug
          }
          frontmatter {
            title
            author
            date(formatString: "dddd, MMMM Do YYYY, h:mm:ss a")
          }
        }
      }
    }
  }
`
