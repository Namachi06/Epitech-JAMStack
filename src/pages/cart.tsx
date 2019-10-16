import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

class Cart extends React.Component {
  constructor(props) {
    super(props)
  }

  public render() {
    return (
      <Layout location="/cart/">
        <SEO title="Cart" />
      </Layout>
    )
  }
}

export default Cart
