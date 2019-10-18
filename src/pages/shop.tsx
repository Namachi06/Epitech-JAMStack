import React from "react"
import {graphql, StaticQuery} from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ProductList from "../components/ProductList";

class Shop extends React.Component {
  constructor(props) {
    super(props)
  }

  public render() {
    const {edges: products} = this.props.allMarkdownRemark
    return (
      <Layout location="/shop/">
        <SEO title="Shop" />
        <ProductList products={products} />
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
                    sizes(maxWidth: 700) {
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
                price
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
