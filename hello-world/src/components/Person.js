import React, { Component } from 'react'

export class Person extends Component {
    constructor(props) {
        super(props);
    }
        
    render() {
        
        return (
            <div>
                <h2>Hi, I am {this.props.person.name}. I am {this.props.person.age} years old. I have {this.props.person.skill} skill</h2>
            </div>
        )
    }
}

export default Person
