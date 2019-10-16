import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

class NotFoundPage extends React.Component {
  constructor(props) {
    super(props)
  }

  public render() {
    return (
      <Layout location="/404/">
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )
  }
}

export default NotFoundPage
