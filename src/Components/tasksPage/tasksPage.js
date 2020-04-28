import React, { Component } from 'react'
import Header from '../header/header'
import Task from '../task/task'
import AppContext from '../context/appContext'
import AddItemLink from '../addItemLink/addItemLink'
import './tasksPage.css'
import PointsBar from '../pointsBar/pointsBar'

class TasksPage extends Component {
  static contextType = AppContext

  render() {
    return (
      <div className='tasks-page'>
        <Header pageTitle='Tasks' />
        <AddItemLink location='/add-task' itemName='Task' />
        <PointsBar />
        <div className='tasks-list'>
          <div className='tasks-container'>
            {this.context.tasks.map(task => (
              <Task key={task.title} title={task.title} points={task.points} checked='task.checked' />
            ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default TasksPage