import React, { Component } from 'react'

export class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
         message: 'Hello'
        }
        //this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler = () => {
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click me</button> */}
        {/* <button onClick={()=> this.clickHandler()}>Click me</button> */}
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    )
  }
}

export default EventBind
