import React from "react"
import {Menu} from "semantic-ui-react"
import {Link} from "gatsby"

import HomeTab from "./Items/HomeTab"
import StoreTab from "./Items/StoreTab"
import ShoppingCartTab from "./Items/ShoppingCartTab"
import SignUpTab from "./Items/SignUpTab"
import SignInTab from "./Items/SignInTab"

class HeaderDesktop extends React.Component {
  public state = {
    activeItem: this.props.location,
  }

  public handleItemClick = (event, {name}) => {
    this.setState({activeItem: name})
  }

  public render() {
    const {activeItem} = this.state
    return (
      <Menu borderless={true} size="massive" pointing={true} inverted={true}>
        <Menu.Menu position="left">
          <Menu.Item
            name="/"
            header={true}
            to="/"
            active={activeItem === "/"}
            as={Link}
            onClick={this.handleItemClick}>
            <HomeTab name="E-commerce" />
          </Menu.Item>
          <Menu.Item
            name="/shop/"
            header={true}
            to="/shop/"
            active={activeItem === "/shop/"}
            as={Link}
            onClick={this.handleItemClick}>
            <StoreTab name="Shop" />
          </Menu.Item>
        </Menu.Menu>
        <Menu.Menu position="right">
          <Menu.Item
            name="/login/"
            header={true}
            to="/login/"
            active={activeItem === "/login/"}
            as={Link}
            onClick={this.handleItemClick}>
            <SignInTab name="Sign in" />
          </Menu.Item>
          <Menu.Item
            name="/register/"
            header={true}
            to="/register/"
            active={activeItem === "/register/"}
            as={Link}
            onClick={this.handleItemClick}>
            <SignUpTab name="Sign up" />
          </Menu.Item>
          <Menu.Item
            name="/cart/"
            header={true}
            to="/cart/"
            active={activeItem === "/cart/"}
            as={Link}
            onClick={this.handleItemClick}>
            <ShoppingCartTab name="Cart" itemNumber={0} />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default ({location}) => <HeaderDesktop location={location} />
