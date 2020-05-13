import React, { Component } from 'react'
import Header from '../header/header'
import TasksService from '../services/tasks-services'
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

  // addTask = event => {
  //   event.preventDefault()
  //   let task = this.state
  //   this.context.addTask(task)
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    const task = this.state
    TasksService.postTask(task)
      .then(res => {
        this.context.addTask(res)
      })
  }



  render() {
    return (
      <section className="addTask">
        <Header pageTitle='Add Task' />
        <form className='addTask-form' onSubmit={this.handleSubmit}>
          <div>
            <input type="text" name='title' id='title' placeholder='Title' onChange={this.handleTitleChange} value={this.state.title} />
          </div>
          <div>
            <input type="text" name='points' id='points' placeholder='Point value' onChange={this.handlePointsChange} value={this.state.points} />
          </div>
          <button className='bttn' type='submit' >Add Task</button>
        </form>
      </section>
    )
  }
}

export default AddTask
