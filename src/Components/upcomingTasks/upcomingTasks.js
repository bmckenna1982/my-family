import React, { Component } from "react"
import Task from '../task/task'
import AddItem from '../addItem/addItem'

class UpcomingTasks extends Component {
  handleClick = () => {
    console.log('clicked add item')
  }
  render() {
    return (
      <section className='upcoming-tasks'>
        <h2>Upcoming Tasks</h2>
        <AddItem itemName='Task' />
        <div className='tasks-container'>
          <Task title='Feed the dogs' points='20' />
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