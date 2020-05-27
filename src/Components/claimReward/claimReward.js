import React, { Component } from 'react'
import './claimReward.css'
import RewardsService from '../services/rewards-services'
import UsersService from '../services/users-service'
import TokenService from '../services/token-services'
import AppContext from '../context/appContext'

class ClaimReward extends Component {

  static contextType = AppContext
  handleSubmit = (e) => {
    e.preventDefault()
    const { id, title, points } = this.props.reward
    const claimed_date = new Date()
    const claimed = true
    const updateFields = { id, title, points, claimed, claimed_date }
    RewardsService.updateReward(id, updateFields)
      .then(() => {
        let userId = TokenService.getSessionId()
        UsersService.getById(userId)
          .then(res => {
            this.context.setCurrentUser(res)
            this.props.hide()
          })
      })
  }

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className='claim-reward'>
        <h2>{`${this.props.reward.title}`}</h2>
        <form className='confirm-decline-form' onSubmit={this.handleSubmit}>
          <legend>Are you sure you want to claim this reward?</legend>
          <p>{`${this.props.reward.points} points will be deducted`}</p>
          <div className='confirm-decline'>
            <button type='submit'>Confirm</button>
            <button type='button' onClick={this.props.hide}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

export default ClaimReward