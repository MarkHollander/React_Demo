import React, { Component } from 'react'

class Hero extends Component {
    constructor(props) {
      super(props)
    
      if (props.heroName === 'Joker') {
        throw new Error('Not a hero!')
      }
    }
    
  render() {
    return (
      <div>
        <h1>{this.props.heroName}</h1>
      </div>
    )
  }
}

export default Hero
