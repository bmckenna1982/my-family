import React, { Component } from 'react'
import Header from '../header/header'
import Task from '../task/task'
import AppContext from '../context/appContext'
import AddItemLink from '../addItemLink/addItemLink'
import PointsBar from '../pointsBar/pointsBar'
import EditTask from '../editTask/editTask'

import './tasksPage.css'
import TasksService from '../services/tasks-services'


class TasksPage extends Component {
  static contextType = AppContext

  componentDidMount() {
    TasksService.getAllTasks()
      .then(data =>
        this.context.setTasks(data)
      )
      .catch(err => {
        this.setState({
          error: `Couldn't get tasks data at this time`
        })
      })
  }

  render() {
    return (
      <div className='tasks-page'>
        <Header pageTitle='Tasks' />
        <AddItemLink location='/add-task' itemName='Task' />
        <PointsBar />
        <section className='tasks-list'>
          <div className='tasks-container'>
            {this.context.tasks.map((task, index) => (
              // <Task key={task.title} title={task.title} points={task.points} checked='task.checked' index={index} />
              <Task key={task.id} title={task.title} points={task.points} checked={task.complete} taskId={task.id} index={index} />
            ))
            }

          </div>
        </section>
        {/* <EditTask show={this.context.showEdit} taskIndex={this.context.selectedTaskIndex} /> */}
      </div>
    )
  }
}

export default TasksPage