import React from "react"
import {List, Image, Segment, Grid, Header, Divider} from "semantic-ui-react"
import logo from "../../assets/images/cent.svg"

class Footer extends React.Component {
  public render() {
    return (
      <Segment
        textAlign="center"
        inverted={true}
        style={{
          position: "block",
          bottom: "0",
          left: "0",
          right: "0",
        }}
        vertical={true}>
        <Grid textAlign="center" columns={4} divided={true} stackable={true} inverted={true}>
          <Grid.Row>
            <Grid.Column>
              <Header inverted={true} as="h4" content="A propos" />
              <List link={true} inverted={true}>
                <List.Item as="a">Conditions générales de vente</List.Item>
                <List.Item as="a">Vos informations personnelles</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header inverted={true} as="h4" content="Services" />
              <List link={true} inverted={true}>
                <List.Item as="a">Cookies</List.Item>
                <List.Item as="a">SAV</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header inverted={true} as="h4" content="Qui sommes-nous ?" />
              <p>Un leader européens.</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider inverted={true} section={true} />
        <Image src={logo} centered={true} size="mini" />
        <List horizontal={true} inverted={true} divided={true} link={true} size="small">
          <List.Item as="a" href="#">
            Site Map
          </List.Item>
          <List.Item as="a" href="#">
            Contactez-nous
          </List.Item>
          <List.Item as="a" href="#">
            Sécurité
          </List.Item>
          <List.Item as="a" href="#">
            Mentions légales
          </List.Item>
        </List>
      </Segment>
    )
  }
}
export default Footer
