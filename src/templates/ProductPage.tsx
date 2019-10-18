import React from "react"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import {graphql} from "gatsby"

class ProductPage extends React.Component {
  public render() {
    const post = this.props.data.markdownRemark
    return (
      <Layout location={"/shop/"}>
        <SEO title={post.frontmatter.title} />
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
        path
        rearLight
        title
        price
      }
    }
  }
`

export default ProductPage
