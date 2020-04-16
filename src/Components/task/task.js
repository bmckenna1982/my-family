import React, { Component } from "react"
import TaskCheck from "../taskCheck/taskCheck";
import './task.css'

class Task extends Component {
  render() {
    return (
      <div className='task'>
        <TaskCheck />
        <div className='task-desc'>
          <div className='task-title'>{this.props.title}</div>
          {/* <div className='due-date'>Due: TODAY</div> */}
          <div className='point-value'>{this.props.points}pts</div>
        </div>
      </div>
    )
  }
}

export default Task