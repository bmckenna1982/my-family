import React, { Component } from 'react'
import TasksService from '../services/tasks-services'

class CompletedTasksList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    TasksService.getAllTasksByUser(this.props.member)
      .then(res => {
        this.setState({
          tasks: [...res]
        })
      })
  }


  render() {
    return (
      <div className='points-history'>
        {this.state.tasks.map((task, index) =>
          <div className='points-event' key={index}>
            <div className='event-desc'>{task.title}</div>
            <div className='event-value'>{task.points}</div>
          </div>
        )}
      </div>
    )
  }
}

export default CompletedTasksList