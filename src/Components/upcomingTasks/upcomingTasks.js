import React, { Component } from "react"
import Task from '../task/task'

class UpcomingTasks extends Component {
  render() {
    return (
      <section className='upcoming-tasks'>
        <h2>Upcoming Tasks</h2>
        <div className='tasks-container'>
          <Task title='Take out trash' points='20' />
          <Task title='Put away laundry' points='20' />
          <Task title='Bathe Dogs' points='100' />
          <Task title='Mow the lawn' points='50' />
        </div>
        <div className='tasks'></div>
        <div className='tasks'></div>
      </section>
    )
  }
}

export default UpcomingTasks