import React, { Component } from 'react'

class EditTaskModal extends Component {
  render() {
    if(!this.props.show) {
      return null
    }
    return (
      <div className='modal' >
        <div className='task-title'> Task title here</div>
        <div className='family-members'>
          <div className='completed-by'>completed by</div>
          <div className='all-members'></div>
          
        </div>
        <div className='split-points'>Split points</div>
        <div className='update-completed-date'></div>
        <div className='button-container'>
          <button >Cancel</button>
          <button >Update</button>
        </div>
      </div>
    )
  }
}

export default EditTaskModal