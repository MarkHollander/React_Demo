import React, { Component } from 'react'

<<<<<<< HEAD
export class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.cbRef = null
        this.setCBRef = element => {
            this.cbRef = element
        }
    }

    componentDidMount() {

        if(this.cbRef) {
            this.cbRef.focus()
        }
        //this.inputRef.current.focus()
        // console.log(this.inputRef)
    }

    clickHandler = () => {
        //alert(this.inputRef.current.value)
        alert(this.cbRef.value)
    }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/>
        <input type="text" ref={this.setCBRef}/>
        <button onClick={this.clickHandler}>Click</button>
=======
class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
    }

    componentDidMount() {
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }
  render() {
    return (
      <div>
        <input type="text" ref = {this.inputRef} />
>>>>>>> ea72bbeabbcd3c10ee44a20bf023403dcce1de94
      </div>
    )
  }
}

<<<<<<< HEAD
export default RefsDemo
=======
export default RefsDemo
>>>>>>> ea72bbeabbcd3c10ee44a20bf023403dcce1de94
