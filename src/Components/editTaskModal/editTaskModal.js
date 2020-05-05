import React, { Component } from 'react'

class EditTaskModal extends Component {
  render() {
    if(!this.props.show) {
      return null
    }
    return (
      <div className='modal' >I'm a {this.props.taskIndex}</div>
    )
  }
}

export default EditTaskModal