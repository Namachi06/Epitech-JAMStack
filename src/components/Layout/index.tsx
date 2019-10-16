import React from "react"
import {Container} from "semantic-ui-react"
import {graphql, StaticQuery} from "gatsby"
import Headroom from "react-headroom"
import "semantic-ui-css/semantic.min.css"

import Header from "../Header"

class Layout extends React.Component {
  public render() {
    const {children, location} = this.props
    return (
      <>
        <Headroom>
          <Header location={location} />
        </Headroom>
        <Container text={true}>{children}</Container>
      </>
    )
  }
}

export default ({children, location}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => <Layout location={location} children={children} {...data} />}
  />
)
