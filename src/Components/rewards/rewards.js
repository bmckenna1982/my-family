import React, { Component } from 'react'
import Header from '../header/header'
import './rewards.css'

class Rewards extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showClaimed: false
    }
  }

  showClaimed(showClaimed) {
    this.setState({ showClaimed })
  }

  render() {

    return (
      <div className='rewards'>
        <Header pageTitle='Rewards' />
        <div className='tab-selection'>
          <button className={'bttn rewards-tab ' + (this.state.showClaimed ? '' : 'active')} id='rewards-tab' onClick={() => this.showClaimed(false)}>Rewards</button>
          <button className={'bttn claimed-tab ' + (this.state.showClaimed ? 'active' : '')} id='claimed-tab' onClick={() => this.showClaimed(true)}>Claimed</button>
        </div>
        {this.state.showClaimed
          ? <div className='claimed-list'>
            <div className='claimed-container'>
              <div className='claimed-item'>
                Xbox live
                </div>
              <div className='claimed-points' >
                200pts
                </div>
              <div className='claimed-date' >
                4/25/2020
              </div>
            </div>
            <div className='claimed-container'>
              <div className='claimed-item'>
                30 min Tech time
                </div>
              <div className='claimed-points' >
                100pts
              </div>
              <div className='claimed-date' >
                4/25/2020
              </div>
            </div>
          </div>
          : <div className='rewards-list'>
            <div className='reward-container'>
              <div className='reward-item'>
                Xbox live
            </div>
              <div className='reward-points' >
                200pts
            </div>
            </div>
            <div className='reward-container active'>
              <div className='reward-item'>
                30 min Tech time
            </div>
              <div className='reward-points' >
                100pts
            </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Rewards