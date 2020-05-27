import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './landingPage.css'

class LandingPage extends Component {
  render() {
    return (
      <div className='landing-page'>
        <header role='banner' className='landing-page-header'>
          <h1>Keep it together with MyFamily.</h1>
          <p>MyFamily keeps your loved ones organized and helps motivate your children with task points and rewards.</p>
          <Link to='/log-in'>
            <button type='button' className='bttn demo'>Explore MyFamily</button>
          </Link>
          <div className='scroll-indicator'>
            <div className='indicator-arrow'></div>
          </div>
        </header>
        <section>
          <header>
            <h2>Family Calendar</h2>
          </header>
          <img className='screenshot' src='https://my-family-app.s3.us-east-2.amazonaws.com/calendarWeek.PNG' alt='calendar screenshot' />
          <p>Keep everyone in sync and get everyone where they need to be with an integrated calendar for all family members</p>
        </section>
        <section>
          <header>
            <h2>Rewarding tasks system</h2>
          </header>
          <img className='screenshot' src='https://my-family-app.s3.us-east-2.amazonaws.com/tasks.PNG' alt='tasks screenshot' />
          <p>Keep everyone motivated to get things done by awarding points for completing tasks.</p>
        </section>
        <section>
          <header>
            <h2>Synced lists</h2>
          </header>
          <img className='screenshot' src='https://my-family-app.s3.us-east-2.amazonaws.com/lists.PNG' alt='lists screenshot' />
          <p>Synced lists with direct add action for quickly jotting down things as you need them</p>
        </section>
        <section>
          <header>
            <h2>Claim Rewards</h2>
          </header>
          <img className='screenshot' src='https://my-family-app.s3.us-east-2.amazonaws.com/rewards.PNG' alt='rewards screenshot' />
          <p>Available rewards listed to work towards or claim</p>
        </section>
      </div>
    )
  }
}

export default LandingPage