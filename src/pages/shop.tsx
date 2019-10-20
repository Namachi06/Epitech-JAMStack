import React from "react"
import {graphql, StaticQuery} from "gatsby"
import {Header, Image} from "semantic-ui-react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import ProductList from "../components/ProductList"
import logo from "../assets/images/cent.svg"

class Shop extends React.Component {
  constructor(props) {
    super(props)
  }

  public render() {
    const {edges: products} = this.props.allMarkdownRemark
    const design = this.props.dataJson.productsPage.design
    return (
      <Layout location="/shop/">
        <SEO title="Shop" />
        <Header
          style={{marginBottom: "2em", marginTop: "1em"}}
          textAlign="center"
          as="h1"
          icon={true}>
          <Header.Content style={{width: "15%", margin: "0 auto"}}>
            <Image src={logo} alt="logo" />
            Shop
          </Header.Content>
          <Header.Subheader>Here you can see the list of our products.</Header.Subheader>
        </Header>
        <ProductList design={design} products={products} />
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
              internal {
                content
              }
              frontmatter {
                featuredImage {
                  childImageSharp {
                    fluid(maxHeight: 700, maxWidth: 1000) {
                      ...GatsbyImageSharpFluid
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
        dataJson {
          productsPage {
            design
          }
        }
      }
    `}
    render={data => <Shop {...data} />}
  />
)
