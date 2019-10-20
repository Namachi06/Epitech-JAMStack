import React from "react"
import Img from "gatsby-image"
import {Item, Segment, Label} from "semantic-ui-react"
import AddToCart from "../AddToCart"

class ProductSummary extends React.Component {
  public render() {
    const {post} = this.props
    return (
      <Item.Group>
        <Item>
          <Item.Image size="big">
            <Segment raised={true}>
              <Label size="large" color={post.frontmatter.color.toLowerCase()} ribbon={true}>
                Overview
              </Label>
              <Img
                fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
                key={post.frontmatter.featuredImage.childImageSharp.fluid.src}
                alt={post.frontmatter.title}
              />
            </Segment>
          </Item.Image>
          <Item.Content verticalAlign="top">
            <Item.Header>
              <Label size="big" color={post.frontmatter.color.toLowerCase()}>
                ${post.frontmatter.price}.00
              </Label>
            </Item.Header>
            <Item.Meta style={{verticalAlign: "bottom"}}>
              <AddToCart post={post} />
            </Item.Meta>
          </Item.Content>
        </Item>
      </Item.Group>
    )
  }
}

export default ({post}) => <ProductSummary post={post} />
