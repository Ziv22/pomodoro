import React, { Component } from 'react';

export class Navbar extends Component {
    changeMode = mode =>{
        {this.props.changeMode(mode)}
    }
    render() {
      return(
        <div className="navbar">
            <button className={`navButtons ${this.props.isWorkMode ? "active" : ""}`} onClick={() => this.changeMode("work")}>Work Mode</button>
            <button className={`navButtons ${this.props.isWorkMode ? "" : "active"}`} onClick={() => this.changeMode("break")}>Break Mode</button>
        </div>
      )
    }
  }
  
  export default Navbar;