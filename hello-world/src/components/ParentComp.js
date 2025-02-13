import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Mai Ngoc'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Mai Ngoc'
            })
        }, 2000)
    }

  render() {
    console.log('************Parent Comp render************')
    return (
        <div>
            ParentComp
            <RegComp name={this.state.name} />
            <PureComp name={this.state.name} />
        </div>
    )
  }
}

export default ParentComp