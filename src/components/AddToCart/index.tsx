import React from "react"
import {Input, Icon} from "semantic-ui-react"

class AddToCart extends React.Component {
  public state = {
    quantity: 1,
    loading: false,
  }

  public updateInputValue = e => {
    this.setState({quantity: e.target.value})
  }

  public render() {
    const {post} = this.props
    return (
      <>
        <Input
          placeholder="Quantity"
          onChange={this.updateInputValue}
          value={this.state.quantity}
          type="number"
          step={1}
          min={1}
          action={{
            color: post.frontmatter.color.toLowerCase(),
            icon: "plus cart",
            content: "Add to Cart",
          }}
        />
      </>
    )
  }
}

export default ({post}) => <AddToCart post={post} />
