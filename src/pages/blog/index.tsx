import React from "react"
import {graphql, Link, StaticQuery} from "gatsby"
import Layout from "../../components/Layout"
import SEO from "../../components/SEO"

class BlogIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  public render() {
    const {edges: posts} = this.props.allMdx
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
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
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
    `}
    render={data => <BlogIndex {...data} />}
  />
)
