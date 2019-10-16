import React from "react"
import {Menu, Image} from "semantic-ui-react"
import {Link} from "gatsby"

import Home from "./Items/Home"
import Store from "./Items/Store"
import ShoppingCart from "./Items/ShoppingCart"
import SignUp from "./Items/SignUp"
import SignIn from "./Items/SignIn"

class HeaderDesktop extends React.Component {
  public state = {
    activeItem: "home",
  }

  public handleItemClick = (event, {name}) => {
    this.setState({activeItem: name})
  }

  public render() {
    const {activeItem} = this.state
    return (
      <Menu fluid={true} borderless={true} size="massive" pointing={true} inverted={true}>
        <Menu.Menu position="left">
          <Menu.Item
            name="home"
            header={true}
            to="/"
            active={activeItem === "home"}
            as={Link}
            onClick={this.handleItemClick}>
            <Home name="E-commerce" />
          </Menu.Item>
          <Menu.Item
            name="store"
            header={true}
            active={activeItem === "store"}
            onClick={this.handleItemClick}>
            <Store name="Shop" />
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item
            name="signIn"
            header={true}
            active={activeItem === "signIn"}
            onClick={this.handleItemClick}>
            <SignIn name="Sign in" />
          </Menu.Item>
          <Menu.Item
            name="signup"
            header={true}
            active={activeItem === "signup"}
            onClick={this.handleItemClick}>
            <SignUp name="Sign up" />
          </Menu.Item>
          <Menu.Item
            name="cart"
            header={true}
            to="/cart/"
            active={activeItem === "cart"}
            as={Link}
            onClick={this.handleItemClick}>
            <ShoppingCart name="Cart" itemNumber={0} />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default HeaderDesktop
