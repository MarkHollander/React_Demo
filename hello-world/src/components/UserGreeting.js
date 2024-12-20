import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
    changeMessage = () => {
      this.setState({
        isLoggedIn: !this.state.isLoggedIn
      })
    }
    
  render() {
    let message
    if(this.state.isLoggedIn) {
      message = <div>Welcome Mai Ngoc</div>
    } else {
      message = <div>Welcome Guest</div>
    }
    return (
      <div>
        <button onClick = {this.changeMessage}>{message}</button>   
      </div>
    )
  }
}

export default UserGreeting
