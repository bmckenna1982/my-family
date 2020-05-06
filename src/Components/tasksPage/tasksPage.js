import React, { Component } from 'react'
import Header from '../header/header'
import Task from '../task/task'
import AppContext from '../context/appContext'
import AddItemLink from '../addItemLink/addItemLink'
import PointsBar from '../pointsBar/pointsBar'
import EditTask from '../editTask/editTask'

import './tasksPage.css'


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
            {this.context.tasks.map((task, index) => (
              <Task key={task.title} title={task.title} points={task.points} checked='task.checked' index={index} />
            ))
            }

          </div>
        </div>
        {console.log('this.context', this.context)}
        {/* <EditTask show={this.context.showEdit} taskIndex={this.context.selectedTaskIndex} /> */}
      </div>
    )
  }
}

export default TasksPage