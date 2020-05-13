import React, { Component } from "react";
import TasksService from "../services/tasks-services";
import AppContext from '../context/appContext'
class TaskCheck extends Component {
  static contextType = AppContext

  handleChange = (e) => {
    e.preventDefault()
    console.log('e.target.checked', e.target.checked)
    const taskToUpdateId = this.props.taskId
    const fieldsToUpdate = { complete: e.target.checked }
    //need to send task id and checked: true
    TasksService.updateTask(taskToUpdateId, fieldsToUpdate)
      .then(() => {
        TasksService.getAllTasks()
          .then(res => {
            this.context.setTasks(res)
          })
      })

  }

  render() {
    let itemChecked = this.props.checked
    const task_id = this.props.taskId
    console.log('this.props', this.props)
    return (
      <input className='task-check' type='checkbox' name={`task-${task_id}`} id={`task-${task_id}`} onChange={this.handleChange} checked={itemChecked} />

    )
  }
}

export default TaskCheck