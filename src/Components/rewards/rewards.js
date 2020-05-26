import React, { Component } from 'react'
import Header from '../header/header'
import AddItemLink from '../addItemLink/addItemLink'
import './rewards.css'
import RewardsService from '../services/rewards-services'

class Rewards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showClaimed: false,
      rewards: []
    }
  }

  componentDidMount() {
    RewardsService.getAllRewards()
      .then(res => {
        this.setState({
          rewards: [...res]
        })
      })
  }

  showClaimed(showClaimed) {
    this.setState({ showClaimed })
  }

  renderClaimed = () => {
    let claimed = this.state.rewards.filter(reward => reward.claimed == true)
    console.log('this.state.rewards', this.state.rewards)
    return claimed.map((reward, index) => (
      <div className='claimed-container' key={index}>
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
      <div className='reward-container' key={index}>
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

    return (
      <div className='rewards'>
        <Header pageTitle='Rewards' />
        <AddItemLink itemName='Reward' location='add-reward' />
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
      </div>
    )
  }
}

export default Rewards