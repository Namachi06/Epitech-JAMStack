import React from "react"
import {graphql, StaticQuery} from "gatsby"
import Headroom from "react-headroom"
import "semantic-ui-css/semantic.min.css"

import Header from "../Header"
import Footer from "../Footer"

class Layout extends React.Component {
  public render() {
    const {children, location} = this.props
    return (
      <>
        <Headroom upTolerance={10} downTolerance={10} style={{zIndex: "20"}}>
          <Header location={location} />
        </Headroom>
        <div
          style={{
            marginRight: "5em",
            marginLeft: "5em",
            marginBottom: "5em",
            marginTop: "2em",
          }}>
          {children}
        </div>
        <Footer />
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
