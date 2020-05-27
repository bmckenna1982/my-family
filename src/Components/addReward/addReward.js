import React, { Component } from 'react'
import Header from '../header/header'
import AppContext from '../context/appContext'
import RewardsService from '../services/rewards-services'

import './addReward.css'

class AddReward extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      points: ''
    }
  }

  static contextType = AppContext

  handleTitleChange = event => {
    event.preventDefault()
    this.setState({
      title: event.target.value
    })
  }

  handlePointsChange = event => {
    event.preventDefault()
    this.setState({
      points: event.target.value
    })
  }

  // addReward = event => {
  //   event.preventDefault()
  //   let reward = this.state
  //   this.context.addReward(reward)
  // }

  handleSubmit = (e) => {
    e.preventDefault()
    const reward = this.state
    RewardsService.postReward(reward)
      .then(res => {
        this.context.addReward(res)
      })
  }

  render() {
    return (
      <div className="add-reward">
        <Header pageTitle='Add Reward' />
        <form className='add-reward-form' onSubmit={this.handleSubmit}>
          <div>
            <input type="text" name='title' id='title' placeholder='Title' onChange={this.handleTitleChange} value={this.state.title} />
          </div>
          <div>
            <input type="text" name='points' id='points' placeholder='Point value' onChange={this.handlePointsChange} value={this.state.points} />
          </div>
          <button className='bttn' type='submit' >Add Reward</button>
        </form>
      </div>
    )
  }
}

export default AddReward
