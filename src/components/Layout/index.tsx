import React from "react"
import {Container} from "semantic-ui-react"
import {graphql, StaticQuery} from "gatsby"
import Headroom from "react-headroom"
import "semantic-ui-css/semantic.min.css"

import Header from "../Header"

class Layout extends React.Component {
  public render() {
    const {children} = this.props
    return (
      <>
        <Headroom>
          <Header />
        </Headroom>
        <Container text={true}>{children}</Container>
      </>
    )
  }
}

export default ({children}) => (
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
    render={data => <Layout children={children} {...data} />}
  />
)
