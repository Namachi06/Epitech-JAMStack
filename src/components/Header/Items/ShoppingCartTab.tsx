import React from "react"
import {Icon} from "semantic-ui-react"

class ShoppingCartTab extends React.Component {
  public render() {
    return (
      <div>
        <Icon name="cart" />
        {this.props.name} ({this.props.itemNumber})
      </div>
    )
  }
}

export default ({itemNumber, name}) => <ShoppingCartTab itemNumber={itemNumber} name={name} />
