import React, { Component } from 'react'
import UsersService from '../services/users-service'
import AppContext from '../context/appContext'
class PointsBar extends Component {

  static contextType = AppContext
  componentDidMount() {
    let userId = (this.context.currentUser > 0) ? this.context.currentUser.id : 1
    UsersService.getById(userId)
      .then(res => {
        this.context.setCurrentUser(res)
      })
  }

  renderPointsDisplay = () => {
    console.log('renderPoints', this.context.currentUser)
    let pointsDisplay = (this.context.currentUser)
      ? <div className='points-status-container'>
        <div className='points'>Point total: {this.context.currentUser.points}</div>
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