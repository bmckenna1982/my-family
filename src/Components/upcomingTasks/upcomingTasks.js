import React, { Component } from "react"
import Task from '../task/task'
import AddItemLink from '../addItemLink/addItemLink'
import AppContext from '../context/appContext'

class UpcomingTasks extends Component {

  static contextType = AppContext

  render() {
    return (
      <section className='upcoming-tasks'>
        <h2>Upcoming Tasks</h2>
        <AddItemLink location='/add-task' itemName='Task' />
        <div className='tasks-container'>
          {this.context.tasks.slice(0, 5).map(task => (
            <Task key={task.title} title={task.title} points={task.points} checked='task.checked' />
          ))
          }
        </div>
        <div className='tasks'></div>
        <div className='tasks'></div>
      </section>
    )
  }
}

export default UpcomingTasks