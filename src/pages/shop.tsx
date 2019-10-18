import React from "react"
import {Image} from "semantic-ui-react"
import {graphql, Link, StaticQuery} from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

class Shop extends React.Component {
  constructor(props) {
    super(props)
  }

  public render() {
    const {edges: products} = this.props.allMarkdownRemark
    return (
      <Layout location="/shop/">
        <SEO title="Shop" />
        {products.map(({node}) => {
          const {title, date, featuredImage} = node.frontmatter
          return (
            <div key={node.id}>
              <header>
                <div>{title}</div>
                <div>{date}</div>
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
        allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
          totalCount
          edges {
            node {
              id
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
              fields {
                slug
              }
            }
          }
        }
      }
    `}
    render={data => <Shop {...data} />}
  />
)
