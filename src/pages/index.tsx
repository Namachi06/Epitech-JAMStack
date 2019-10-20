import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import {Header, Image} from "semantic-ui-react"

import logo from "../assets/images/cent.svg"
import {StaticQuery, graphql} from "gatsby"

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }

  public indexDesign1 = () => {
    return (
      <>
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
      </>
    )
  }

  public indexDesign2 = () => {
    return (
      <>
        <Image style={{marginBottom: "5em"}} centered={true} size="medium" src={logo} />
        <Header textAlign="center" as="h1">
          E-commerce
        </Header>
        <Header.Content style={{textAlign: "center"}}>
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
      </>
    )
  }

  public render() {
    const design = this.props.dataJson.homepage.design
    return (
      <Layout location="/">
        <SEO title="Home" />
        {design === 1 && this.indexDesign1()}
        {design === 2 && this.indexDesign2()}
      </Layout>
    )
  }
}

export default () => (
  <StaticQuery
    query={graphql`
      query {
        dataJson {
          homepage {
            design
          }
        }
      }
    `}
    render={data => <IndexPage {...data} />}
  />
)
