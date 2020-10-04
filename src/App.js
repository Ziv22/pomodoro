import React, { Component } from 'react';
import './App.css';
import Clock from "./components/Clock"
import Navbar from "./components/Navbar"
import ActionRow from "./components/ActionRow"
import AdjustRow from "./components/AdjustRow"
import MusicRow from './components/MusicRow'

export class App extends Component {
  constructor(){
    super()
    this.state={
      workTime:{
        minutes:'25',
        seconds:'00'
      },
      breakTime:{
        minutes:'05',
        seconds:'00'
      },
      minutes:'25',
      seconds:'00', 
      timer: null, 
      isWorkMode:true, 
      isActive:false
    }
  }

  start = () =>{
    this.setState({
      isActive:true,
      timer:setInterval(()=>{
        this.tick()
        },1000)
      })
  }

  pause = () =>{
    clearInterval(this.state.timer)
    this.setState({isActive:false})
  }

  reset = () =>{
    let minutes = this.state.isWorkMode ? this.state.workTime.minutes : this.state.breakTime.minutes
    let seconds = this.state.isWorkMode ? this.state.workTime.seconds : this.state.breakTime.seconds
    this.setState({isActive:false, minutes, seconds})
    clearInterval(this.state.timer)
  }

  modifyTime = (seconds,minutes) =>{
    seconds = parseInt(seconds)
    minutes = parseInt(minutes)

    if(seconds > 0){
      seconds--
    } else {
      minutes--
      seconds = 59
    }

    seconds = seconds < 10 ? `0${seconds}` : seconds
    minutes = minutes < 10 ? `0${minutes}` : minutes
    return {seconds,minutes}
  }

  tick = () =>{
    let {seconds , minutes} = this.modifyTime(this.state.seconds ,this.state.minutes)
    this.setState({seconds , minutes})
    if(minutes === '00' && seconds === '00'){
      this.finished()
    }
  }

  
  changeMode = mode =>{
    let isWorkMode = (mode === 'work') ? true : false
    this.setState({isWorkMode}, () =>{
      this.reset()
    })
  }

  AdjustTime = minutes =>{
    minutes = minutes < 10 ? `0${minutes}` : minutes
    this.setState({minutes})
  }

  finished = () =>{
    clearInterval(this.state.timer)
    this.setState({isWorkMode:!this.state.isWorkMode})
    this.reset()
    this.start()
  }

  render() {
    return(
      <div className="container">
        <div className="timeSection">
          <Navbar changeMode={this.changeMode} isWorkMode={this.state.isWorkMode}/>
              <h1 className="header">
                  <span class="char1">P</span>
                  <span class="char2">O</span>
                  <span class="char3">M</span>
                  <span class="char4">O</span>
                  <span class="char5">D</span>
                  <span class="char6">O</span>
                  <span class="char7">R</span>
                  <span class="char8">O</span>
              </h1>
          <Clock minutes={this.state.minutes} seconds={this.state.seconds}/>
          <AdjustRow isWorkMode={this.state.isWorkMode} AdjustTime={this.AdjustTime}/>
          <ActionRow currentAction={this.state.isActive ? "Pause" : "Start"} resetClicked={this.reset} activateAction={this.state.isActive ? this.pause : this.start}/>
        </div>
        <div>
          <MusicRow/>
        </div>
      </div>
    )
  }
}

export default App;