import React, { Component } from "react"
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
        <TaskCheck />
        <div className='task-desc'>
          <div className='task-title'>{this.props.title}</div>
          {/* <div className='due-date'>Due: TODAY</div> */}
          <div className='point-value'>{this.props.points}pts</div>
        </div>
        <FontAwesomeIcon icon={faEdit} className='edit-icon' onClick={() => this.context.openEdit(this)} />
      </div>
    )
  }
}

export default Task