import React from "react"
import {Icon} from "semantic-ui-react"

class SignIn extends React.Component {
  public render() {
    return (
      <div>
        <Icon style={{paddingRight: "1.4em"}} name="sign in" />
        {this.props.name}
      </div>
    )
  }
}

export default ({name}) => <SignIn name={name} />
