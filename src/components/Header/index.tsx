import React from "react"
import {Responsive} from "semantic-ui-react"
import HeaderDesktop from "./HeaderDesktop"

class Header extends React.Component {
  public render() {
    const {location} = this.props
    return (
      <Responsive minWidth={Responsive.onlyComputer.minWidth}>
        <HeaderDesktop location={location} />
      </Responsive>
    )
  }
}

export default ({location}) => <Header location={location} />
