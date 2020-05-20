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
    console.log('this.props.member', this.props.member)
    TasksService.getAllTasksByUser(this.props.member)
      .then(res => {
        console.log('res', res)
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