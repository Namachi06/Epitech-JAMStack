import React from "react"
import {Divider, Table, Icon} from "semantic-ui-react"

class ProductAttributes extends React.Component {
  public render() {
    const {post} = this.props
    return (
      <>
        <Divider />
        <Table stackable={true} selectable={true} celled={true}>
          <Table.Header style={{backgroundColor: "#d3d3d3"}}>
            <Table.Row>
              <Table.HeaderCell colSpan="2">Attributes</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Color</Table.Cell>
              <Table.Cell>{post.frontmatter.color}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Icon name="battery high" />
                Battery
              </Table.Cell>
              <Table.Cell>{post.frontmatter.battery}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Icon name="bolt" />
                Charger
              </Table.Cell>
              <Table.Cell>{post.frontmatter.charger}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Icon name="settings" />
                Drive System
              </Table.Cell>
              <Table.Cell>{post.frontmatter.driveSystem}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Icon name="lightbulb" />
                Front LED
              </Table.Cell>
              <Table.Cell>{post.frontmatter.frontLed}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Icon name="lightbulb" />
                Rear Light
              </Table.Cell>
              <Table.Cell>{post.frontmatter.rearLight}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </>
    )
  }
}

export default ({post}) => <ProductAttributes post={post} />
