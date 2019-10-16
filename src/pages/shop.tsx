import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

class Shop extends React.Component {
  constructor(props) {
    super(props)
  }

  public render() {
    return (
      <Layout location="/shop/">
        <SEO title="Shop" />
      </Layout>
    )
  }
}

export default Shop
