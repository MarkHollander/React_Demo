import React, { Component } from 'react'

export class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      comments: '',
      topic: 'react'
    }
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    },
      () => console.log(this.state.username)
    )
  }

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value
    },
      () => console.log(this.state.comments)
    )
  }

  handleTopicsChange = (event) => {
    this.setState({
      topic: event.target.value
    },
      () => console.log(this.state.topic)
    )
  }

  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
  }
  

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <div>
          <label>Username</label>
          <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
        </div>
        <div>
          <label>Comments</label>
          <textarea value={this.state.comments} onChange={this.handleCommentsChange}>

          </textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value = {this.state.topic} onChange = {this.handleTopicsChange}>
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>

      </form>
    )
  }
}

export default Form
