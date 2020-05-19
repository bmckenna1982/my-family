import React, { Component } from 'react'
import UsersService from '../services/users-service'
import AppContext from '../context/appContext'
class PointsBar extends Component {

  static contextType = AppContext
  componentDidMount() {
    let userId = this.context.currentUser.id
    console.log('userId', userId)
    UsersService.getById(userId)
      .then(res => {
        this.context.setCurrentUser(res)
      })
  }

  renderPointsDisplay = () => {
    let pointsDisplay = (this.context.currentUser)
      ? <div className='points-status-container'>
        <div className='points'>Point total: {this.context.currentUser.points || 0} </div>
        <div className='leader'>Next tier: 200</div>
      </div>
      : ''

    return pointsDisplay
  }

  render() {
    return (
      <div className='points-status-wrapper'>
        {this.renderPointsDisplay()}
      </div>
    )
  }
}

export default PointsBar