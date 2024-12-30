import React, { Component } from 'react'

class LifecycleA extends Component {
    constructor(props) {
      super(props)
        console.log('LifecycleA constructor')
      this.state = {
            name: 'Vishwas'
      }
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }
    
  render() {
    console.log('LifecycleA render')    
    return (
      <div>
        LifecycleA    
      </div>
    )
  }
}

export default LifecycleA
