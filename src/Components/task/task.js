import React, { Component } from "react"
import TaskCheck from "../taskCheck/taskCheck";

class Task extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='task'>
        <TaskCheck />
        <div className='task_desc'>
          <div className='task_title'>{this.props.title}</div>
          {/* <div className='dueDate'>Due: TODAY</div> */}
          <div className='point_value'>{this.props.points}pts</div>
        </div>
      </div>
    )
  }
}

export default Task