import React, { Component } from 'react';

export class MusicRow extends Component {
  constructor(){
    super()
    this.state={
      videos:[
        "https://www.youtube.com/embed/tgbNymZ7vqY",
        "https://www.youtube.com/embed/9QiE-M1LrZk",
        "https://www.youtube.com/embed/QPtoORTjzLk", 
        "https://www.youtube.com/embed/sNhhvQGsMEc",
      ]
    }
  }
    render() {
      
      return(
        <div className="musicRow">
            {this.state.videos.map( v => <iframe width="250" height="200" src={v}></iframe>)}
        </div>
      )
    }
  }
  
  export default MusicRow;