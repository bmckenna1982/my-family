import React, { Component } from 'react'
import Header from '../header/header'
import AppContext from '../context/appContext'

class AddTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      points: ''
    }
  }

  static contextType = AppContext

  handleTitleChange = event => {
    event.preventDefault()
    console.log('event.target.title', event.target.value)
    this.setState({
      title: event.target.value
    })
  }

  handlePointsChange = event => {
    event.preventDefault()
    this.setState({
      points: event.target.value
    })
  }

  addTask = event => {
    event.preventDefault()
    let task = this.state
    this.context.addTask(task)
  }

  render() {
    return (
      <section className="addTask">
        <Header pageTitle='Add Task' />
        <form className='addTask-form' onSubmit={this.addTask}>
          <div>
            <input type="text" name='title' id='title' placeholder='Title' onChange={this.handleTitleChange} value={this.state.title} />
          </div>
          <div>
            <input type="text" name='points' id='points' placeholder='Point value' onChange={this.handlePointsChange} value={this.state.points} />
          </div>
          <button type='submit' >Add Task</button>
        </form>
      </section>
    )
  }
}

export default AddTask
