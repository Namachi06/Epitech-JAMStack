import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

class Login extends React.Component {
  constructor(props) {
    super(props)
  }

  public render() {
    return (
      <Layout location="/login/">
        <SEO title="Login" />
      </Layout>
    )
  }
}

export default Login
