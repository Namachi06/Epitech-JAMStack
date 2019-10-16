import React from "react"
import {Icon} from "semantic-ui-react"

class SignInTab extends React.Component {
  public render() {
    return (
      <div>
        <Icon style={{paddingRight: "1.4em"}} name="sign in" />
        {this.props.name}
      </div>
    )
  }
}

export default ({name}) => <SignInTab name={name} />
