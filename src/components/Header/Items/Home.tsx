import React from "react"
import {Image} from "semantic-ui-react"

import Logo from "../../../assets/svg/cent.svg"

class Home extends React.Component {
  public render() {
    return (
      <div>
        <Image style={{marginRight: "1em"}} size="mini" src={Logo} alt="Logo Header" />
        {this.props.name}
      </div>
    )
  }
}

export default ({name}) => <Home name={name} />
