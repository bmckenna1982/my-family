import React, { Component } from "react"
import { Link } from 'react-router-dom'
import TaskCheck from "../taskCheck/taskCheck";
import AppContext from '../context/appContext'

import './task.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'


class Task extends Component {
  state = {
    showModal: false
  }

  static contextType = AppContext

  render() {
    return (
      <div className='task'>
        <TaskCheck key={this.props.taskId} checked={this.props.checked} taskId={this.props.taskId} index={this.props.index} />
        <div className='task-desc'>
          <div className='task-title'>{this.props.title}</div>
          {/* <div className='due-date'>Due: TODAY</div> */}
          <div className='point-value'>{this.props.points}pts</div>
        </div>
        <Link to='/edit-task'>
          <FontAwesomeIcon icon={faEdit} className='edit-icon' onClick={() => this.context.openEdit(this)} />
        </Link>
      </div>
    )
  }
}

export default Task