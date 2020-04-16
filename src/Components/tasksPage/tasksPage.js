import React, { Component } from 'react'
import Header from '../header/header'
import Task from '../task/task'
import './tasksPage.css'

class TasksPage extends Component {
  render() {
    return (
      <div className='tasks-page'>
        <Header pageTitle='Tasks' />
        <div className='tasks-list'>
          <Task title='Feed the dogs' points='20' />
          <Task title='Take out trash' points='20' />
          <Task title='Put away laundry' points='20' />
          <Task title='Bathe Dogs' points='100' />
          <Task title='Mow the lawn' points='50' />
          <Task title='Vacumn living room' points='30' />
          <Task title='Vacumn playroom' points='30' />
          <Task title='Vacumn bedroom' points='30' />
        </div>
      </div>
    )
  }
}

export default TasksPage