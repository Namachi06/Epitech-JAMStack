import React from "react"
import {Icon} from "semantic-ui-react"

class ShoppingCart extends React.Component {
  public render() {
    return (
      <div>
        <Icon name="cart" />
        {this.props.name} ({this.props.itemNumber})
      </div>
    )
  }
}

export default ({itemNumber, name}) => <ShoppingCart itemNumber={itemNumber} name={name} />
