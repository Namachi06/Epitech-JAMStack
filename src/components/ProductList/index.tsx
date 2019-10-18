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
        meta: <Card.Meta style={{color: "dimgray"}}>{frontmatter.price} $</Card.Meta>,
        image: (
          <Image>
            <Img
              sizes={frontmatter.featuredImage.childImageSharp.sizes}
              alt={frontmatter.title}
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
        itemsPerRow={2}
        stackable={true}
      />
    )
  }
}

export default ({products}) => <ProductList products={products} />
