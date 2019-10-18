import React from "react"
import {Image} from "semantic-ui-react"
import {graphql, Link, StaticQuery} from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

class Shop extends React.Component {
  constructor(props) {
    super(props)
  }

  public render() {
    const {edges: products} = this.props.allMarkdownRemark
    console.log(products)
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
                <Img sizes={featuredImage.childImageSharp.sizes} />
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
                featuredImage {
                  childImageSharp {
                    sizes(maxWidth: 400) {
                      ...GatsbyImageSharpSizes
                    }
                  }
                }
                battery
                charger
                color
                date
                driveSystem
                frontLed
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
