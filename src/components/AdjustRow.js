import React, { Component } from 'react';

export class AdjustRow extends Component {
  constructor(){
    super()
    this.state={
      workTimes: [15 , 20, 25, 30, 35],
      breakTimes: [1 , 3, 5, 7, 9]
    }
    
  }
    adjustTime = time =>{
      {this.props.AdjustTime(time)}
    }

    render() {
      this.selectedTimes = this.props.isWorkMode ? this.state.workTimes : this.state.breakTimes

      return(
        <div className="AdjustRow">
          {this.selectedTimes.map(t =>
            <button key={t} onClick={() =>{this.adjustTime(t)}} className={"button adjustTime"}>{t}</button>
          )}
        </div>
      )
    }
  }
  
  export default AdjustRow;