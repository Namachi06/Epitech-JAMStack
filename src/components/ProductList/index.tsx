import React from "react"
import {Link} from "gatsby"
import {Card, Image, List} from "semantic-ui-react"
import Img from "gatsby-image"

class ProductList extends React.Component {
  public listProducts1 = products => {
    return products.map(({node: {id, fields, frontmatter}}) => {
      return {
        as: Link,
        to: fields.slug,
        childKey: id,
        header: frontmatter.title,
        fluid: true,
        meta: <Card.Meta style={{color: "dimgray"}}>{frontmatter.price} $</Card.Meta>,
        image: (
          <Image wrapped={true} ui={false}>
            <Img
              fluid={frontmatter.featuredImage.childImageSharp.fluid}
              alt={frontmatter.title}
              key={frontmatter.featuredImage.childImageSharp.fluid.src}
              style={{background: "#ffffff"}}
            />
          </Image>
        ),
      }
    })
  }

  public listProducts2 = products => {
    return products.map(({node: {id, fields, frontmatter, internal}}) => {
      return {
        as: Link,
        to: fields.slug,
        childKey: id,
        fluid: true,
        children: (
          <List style={{margin: "2em"}}>
            <List.Item>
              <Img
                fluid={frontmatter.featuredImage.childImageSharp.fluid}
                alt={frontmatter.title}
                key={frontmatter.featuredImage.childImageSharp.fluid.src}
                style={{width: "30%", float: "left", marginRight: "2em"}}
              />
              <List.Content>
                <List.Header style={{paddingBottom: "1.5em"}} as="h1">
                  {frontmatter.title}
                </List.Header>
                <List.Description>{internal.content}</List.Description>
              </List.Content>
            </List.Item>
          </List>
        ),
      }
    })
  }

  public render() {
    const design = this.props.design
    return (
      <>
        {design === 1 && (
          <Card.Group
            items={this.listProducts1(this.props.products)}
            itemsPerRow={3}
            stackable={true}
            centered={true}
          />
        )}
        {design === 2 && <Card.Group items={this.listProducts2(this.props.products)} />}
      </>
    )
  }
}

export default ({products, design}) => <ProductList design={design} products={products} />
