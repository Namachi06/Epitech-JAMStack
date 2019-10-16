import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

class Register extends React.Component {
  constructor(props) {
    super(props)
  }

  public render() {
    return (
      <Layout location="/register/">
        <SEO title="Register" />
      </Layout>
    )
  }
}

export default Register
