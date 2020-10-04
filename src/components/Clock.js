import React, { Component } from 'react';

export class Clock extends Component {
    render() {
      
      return(
        <div className="clock">
            <h1 id="time">{this.props.minutes}:{this.props.seconds}</h1>
        </div>
      )
    }
  }
  
  export default Clock;