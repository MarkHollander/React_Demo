import React, { Component } from 'react'

export class ClassClick extends Component {

  /**
   *
   */
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }

    //this.clickHandler = this.clickHandler.bind(this);
    //this.fiveClickHandler = this.fiveClickHandler.bind(this);
  }
  
  clickHandler() {
    this.setState(
      prevState => ({
        count : prevState.count + 1
      }),
      () => console.log(this.state.count)
    );
    
  }

  fiveClickHandler() {  
    this.clickHandler();
    this.clickHandler();
    this.clickHandler();
    this.clickHandler();
    this.clickHandler();
  }

  
  render() {
    return (
      <div>
        <div>{this.state.count}</div>
        <button onClick={() => this.fiveClickHandler()}>Click me</button>
      </div>
    )
  }
}

export default ClassClick
