import React, { Component } from 'react'
import './landingPage.css'

class LandingPage extends Component {
  render() {
    return (
      <div className='landing-page'>
        <header role="banner">
          <h1>Keep it together with MyFamily.</h1>
          <p>MyFamily keeps your loved ones organized and helps motivate your children with task points and rewards.</p>
          <button type='button' className='bttn demo'>Explore MyFamily</button>
        </header>
        <section>
          <header>
            <h3>Family Calendar</h3>
          </header>
          <p>[<em>placeholder for screenshot of calendar</em>]</p>
          <p>Keep everyone in sync and get everyone where they need to be with an integrated calendar for all family members</p>
        </section>
        <section>
          <header>
            <h3>Rewarding tasks system</h3>
          </header>
          <p>[<em>placeholder for screenshot of to do list</em>]</p>
          <p>Keep everyone motivated to get things done by awarding points for completing tasks.</p>
        </section>
        <section>
          <header>
            <h3>Synced lists</h3>
          </header>
          <p>[<em>placeholder for screenshot of shopping lists</em>]</p>
          <p>Synced lists for creating shopping lists, school supply lists or anything</p>
        </section>
      </div>
    )
  }
}

export default LandingPage