import React from "react"
import {graphql} from "gatsby"
import {Container, Header, Icon} from "semantic-ui-react"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import ProductSummary from "../components/ProductSummary"
import ProductAttributes from "../components/ProductAttributes";

class ProductPage extends React.Component {
  public render() {
    const post = this.props.data.markdownRemark
    return (
      <Layout location={"/shop/"}>
        <SEO title={post.frontmatter.title} />
        <Container style={{width: "75%"}}>
          <Header
            attached="top"
            style={{marginBottom: "3em"}}
            color="grey"
            textAlign="center"
            as="h1"
            icon={true}>
            <Icon name="dollar sign" />
            {post.frontmatter.title}
          </Header>
          <ProductSummary post={post} />
          <ProductAttributes post={post} />
        </Container>
      </Layout>
    )
  }
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      id
      frontmatter {
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 700) {
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
    }
  }
`

export default ProductPage
