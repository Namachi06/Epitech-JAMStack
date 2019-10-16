import React from "react"
import {Icon} from "semantic-ui-react"

class SignUpTab extends React.Component {
  public render() {
    return (
      <div>
        <Icon style={{paddingRight: "1.4em"}} name="user plus" />
        {this.props.name}
      </div>
    )
  }
}

export default ({name}) => <SignUpTab name={name} />
