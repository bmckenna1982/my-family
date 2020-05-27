import React, { Component } from 'react'
import Header from '../header/header'
import AppContext from '../context/appContext'

import './editTask.css'

class EditTask extends Component {
  static contextType = AppContext
  render() {
    const selectedTask = (this.context.tasks[this.context.selectedTaskIndex] || 'Edit Task')

    return (
      <div className='edit-task' >
        <Header pageTitle={selectedTask.title} />
        <div className='family-members'>
          <div className='completed-by'>completed by</div>
          <div className='member-image-container'>
            <img className='member-image' src='https://my-family-app.s3.us-east-2.amazonaws.com/family-boy.svg' alt='cartoon boy' />
          </div>
          <div className='member-name'>Keean</div>

          <div className='all-members'></div>

        </div>
        <button className='split-points'>Split points</button>
        <div className='update-completed-date'>
          <div className='completed-day completed-edit'>Day</div>
          <div className='completed-month completed-edit'>Month</div>
          <div className='completed-year completed-edit'>year</div>
        </div>
        <div className='button-container'>
          <button onClick={() => this.props.history.goBack()}>Cancel</button>
          <button >Update</button>
        </div>
      </div>
    )
  }
}

export default EditTask