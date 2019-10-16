import React from "react"
import {Icon} from "semantic-ui-react"

class StoreTab extends React.Component {
  public render() {
    return (
      <div>
        <Icon style={{paddingRight: "1.4em"}} name="dollar sign" />
        {this.props.name}
      </div>
    )
  }
}

export default ({name}) => <StoreTab name={name} />
