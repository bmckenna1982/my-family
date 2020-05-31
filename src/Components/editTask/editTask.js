import React, { Component } from 'react'
import Header from '../header/header'
import DatePicker from 'react-date-picker'
import AppContext from '../context/appContext'

import './editTask.css'
import TasksService from '../services/tasks-services'
import UsersService from '../services/users-service'

class EditTask extends Component {
  constructor(props) {
    super(props)
    this.state = {
      task: {
        title: '',
        user_id: null,
        completed_date: null,
      },
      users: [],
      selectedMember: ''

    }
  }
  static contextType = AppContext

  componentDidMount() {
    TasksService.getTask(this.props.match.params.task_id)
      .then(task => {
        this.setState({ task })
      })

    UsersService.getAllUsers()
      .then(users => {
        this.setState({ users })
      })

  }

  getMemberName = (user_id) => {
    const completedUser = this.state.users.filter(user => user.id === user_id)[0]
    return completedUser
      ? <div className='completed-by'>
        <div className='completed-by-heading'>completed by</div>
        <div className='member-name'>{completedUser.first_name}</div>
      </div>
      : <div className='member-name'>Not Yet Complete</div>
  }
  getMemberId = (first_name) => {
    const completedUser = this.state.users.filter(user => user.first_name === first_name)[0]
    return completedUser.id
  }

  onChange = (date) => this.setState({ task: { ...this.state.task, completed_date: date } })

  displayDatePicker = () => {
    return this.state.task.complete
      ? <div className='update-completed-date'>
        <DatePicker onChange={this.onChange} value={new Date(this.state.task.completed_date)} />
      </div>
      : ''
  }

  handleMemberChange = (e) => {
    e.preventDefault()
    const newUserId = this.getMemberId(e.target.value)
    //check to see if the new value is actually a new value if not return and don't update
    if (e.target.value === 'Update completed member' || newUserId === this.state.task.user_id) {
      return
    }
    this.setState({ selectedMember: e.target.value })
    this.setState({ task: { ...this.state.task, user_id: newUserId } })
  }

  displayUserSelect = () => {
    return this.state.task.complete
      ? <div className='member-select'>
        <select name='members' id='members' onChange={this.handleMemberChange}>
          <option value={this.state.selectedMember}>Update completed member</option>
          {this.state.users.map(user => <option value={user.first_name} key={user.first_name}>{user.first_name}</option>)}
        </select>
      </div>
      : ''
  }

  handleUpdate = () => {
    TasksService.updateTask(this.state.task.id, this.state.task)
      .then(res => {
        this.props.history.goBack()
      })
  }

  handlePointsChange = (e) => {
    e.preventDefault()
    this.setState({ task: { ...this.state.task, points: parseInt(e.target.value, 10) } })
  }

  render() {

    return (
      <div className='edit-task' >
        <Header pageTitle={this.state.task.title} />
        <div className='family-members'>
          {this.getMemberName(this.state.task.user_id)}
          {/* <div className='completed-by'>completed by</div>
          <div className='member-name'>{this.getMemberName(this.state.task.user_id)}</div> */}
          <div className='member-image-container'>
            <img className='member-image' src='https://my-family-app.s3.us-east-2.amazonaws.com/family-boy.svg' alt='cartoon boy' />
          </div>
          {/* <div className='member-name'>{this.getMemberName(this.state.task.user_id)}</div> */}

          <div className='all-members'>
            {this.displayUserSelect()}
          </div>

        </div>
        <div className='points-total' >
          <input type='text' className='points-input' aria-label='points input' placeholder={this.state.task.points} onChange={this.handlePointsChange}></input>
          <div className='points-current'>pts</div>
          {/* <button type='button' className='points -split' onClick={this.adjustPoints()}>Adjust points</button> */}
        </div>
        {this.displayDatePicker()}
        <div className='button-container'>
          <button type='button' onClick={() => this.props.history.goBack()}>Cancel</button>
          <button type='button' onClick={this.handleUpdate}>Update</button>
        </div>
      </div>
    )
  }
}

export default EditTask