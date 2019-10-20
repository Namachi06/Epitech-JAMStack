import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import {Header, Image} from "semantic-ui-react"

import logo from "../assets/images/cent.svg"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  public render() {
    return (
      <Layout location="/">
        <SEO title="Home" />
        <Image style={{marginRight: "10em"}} floated="left" size="medium" src={logo} />
        <Header as="h1">E-commerce</Header>
        <Header.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
          dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
          anim id est laborum.
        </Header.Content>
      </Layout>
    )
  }
}

export default IndexPage
