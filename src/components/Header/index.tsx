import React from "react"
import {Responsive} from "semantic-ui-react"
import HeaderDesktop from "./HeaderDesktop"

class Header extends React.Component {
  public render() {
    return (
      <Responsive minWidth={Responsive.onlyComputer.minWidth}>
        <HeaderDesktop />
      </Responsive>
    )
  }
}

export default Header
