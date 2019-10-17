import React from "react"
import {Image} from "semantic-ui-react"

import Logo from "../../../assets/images/cent.svg"

class HomeTab extends React.Component {
  public render() {
    return (
      <>
        <Image style={{marginRight: "1em"}} size="mini" src={Logo} alt="Logo Header" />
        {this.props.name}
      </>
    )
  }
}

export default ({name}) => <HomeTab name={name} />
