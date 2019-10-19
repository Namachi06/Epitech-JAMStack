import React from "react"
import {Link} from "gatsby"
import {Card, Image} from "semantic-ui-react"
import Img from "gatsby-image"

class ProductList extends React.Component {
  public listProductsToItems = products => {
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

  public render() {
    return (
      <Card.Group
        items={this.listProductsToItems(this.props.products)}
        itemsPerRow={3}
        stackable={true}
      />
    )
  }
}

export default ({products}) => <ProductList products={products} />
