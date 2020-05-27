import React, { Component } from 'react'
import Header from '../header/header'
import AddItemLink from '../addItemLink/addItemLink'
import './rewards.css'
import RewardsService from '../services/rewards-services'
import PointsBar from '../pointsBar/pointsBar'
import AppContext from '../context/appContext'
import ClaimReward from '../claimReward/claimReward'

class Rewards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showClaimed: false,
      rewards: [],
      error: null
    }
  }

  static contextType = AppContext

  componentDidMount() {
    RewardsService.getAllRewards()
      .then(res => {
        this.setState({
          rewards: [...res],
          selectedReward: null
        })
      })
  }

  showClaimed(showClaimed) {
    this.setState({ showClaimed })
  }

  showModal = e => {
    this.setState({ show: true })
  }

  hideModal = (e) => {
    console.log('hide')
    RewardsService.getAllRewards()
      .then(res => {
        this.setState({
          rewards: [...res],
          selectedReward: null
        })
      })
    this.setState({ show: false })
  }

  claimReward(reward) {
    console.log('reward', reward)
    this.setState({ selectedReward: reward })
    if (this.context.currentUser.points < reward.points) {
      this.setState({ error: { message: `Currently not enough points for reward` } })
    } else {
      this.showModal()
    }

  }

  renderClaimed = () => {
    let claimed = this.state.rewards.filter(reward => reward.claimed == true)
    console.log('this.state.rewards', this.state.rewards)
    return claimed.map((reward, index) => (
      <div className='reward-container claimed' key={index}>
        <div className='claimed-item'>
          {reward.title}
        </div>
        <div className='claimed-points' >
          {`${reward.points}pts`}
        </div>
        <div className='claimed-date' >
          {reward.claimed_date}
        </div>
      </div>
    ))
  }

  renderAvailable = () => {
    let available = this.state.rewards.filter(reward => reward.claimed != true)
    return available.map((reward, index) => (
      <div className={`reward-container ${(reward.points < this.context.currentUser.points) ? 'available' : ''}`} key={index} onClick={() => this.claimReward(reward)}>
        <div className='reward-item'>
          {reward.title}
        </div>
        <div className='reward-points' >
          {`${reward.points}pts`}
        </div>
      </div>
    ))
  }

  render() {
    console.log('render rewards')
    const { error } = this.state
    return (
      <div className='rewards'>
        <Header pageTitle='Rewards' />
        <AddItemLink itemName='Reward' location='add-reward' />
        <PointsBar />
        <ClaimReward show={this.state.show} reward={this.state.selectedReward} hide={this.hideModal} />
        <div role='alert'>{error && <p className='red'>{error.message}</p>}</div>
        <section className='rewards-container'>
          <div className='tab-selection'>
            <button className={'bttn rewards-tab ' + (this.state.showClaimed ? '' : 'active')} id='rewards-tab' onClick={() => this.showClaimed(false)}>Rewards</button>
            <button className={'bttn claimed-tab ' + (this.state.showClaimed ? 'active' : '')} id='claimed-tab' onClick={() => this.showClaimed(true)}>Claimed</button>
          </div>
          {this.state.showClaimed
            ? <div className='claimed-list'>
              {this.renderClaimed()}
            </div>
            : <div className='rewards-list'>
              {this.renderAvailable()}
            </div>
          }
        </section>
      </div>
    )
  }
}

export default Rewards