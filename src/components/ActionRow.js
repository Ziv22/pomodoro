import React, { Component } from 'react';

export class ActionRow extends Component {
    render() {
      
      return(
        <div className="actionRow">
            <button className="actionButtons button" onClick={this.props.activateAction}>{this.props.currentAction}</button>
            <button className="actionButtons button" onClick={this.props.resetClicked}>Reset</button>
        </div>
      )
    }
  }
  
  export default ActionRow;