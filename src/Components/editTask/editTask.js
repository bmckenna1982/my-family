import React, { Component } from 'react'
import Header from '../header/header'
import AppContext from '../context/appContext'

class EditTask extends Component {
  static contextType = AppContext
  render() {
    //commented out below code, may be reused for making modal component
    // if(!this.props.show) {  
    //   return null
    // }
    const selectedTask = this.context.tasks[this.context.selectedTaskIndex]

    return (
      <div className='edit-task' >
        <Header pageTitle={selectedTask.title} />
       {/* <div className='task-title'> Task title here</div> */}
        <div className='family-members'>
          <div className='completed-by'>completed by</div>
          <div className='all-members'></div>
          
        </div>
        <div className='split-points'>Split points</div>
        <div className='update-completed-date'>
          <div className='completed-day'>Day</div>
          <div className='completed-month'>Month</div>
          <div className='completed-year'>year</div>
        </div>
        <div className='button-container'>
          <button >Cancel</button>
          <button >Update</button>
        </div>
      </div>
    )
  }
}

export default EditTask