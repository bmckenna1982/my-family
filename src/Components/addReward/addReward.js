import React, { Component } from 'react'
import AppContext from '../context/appContext'

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
    console.log('event.target.title', event.target.value)
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

  addReward = event => {
    event.preventDefault()
    let reward = this.state
    this.context.addReward(reward)
  }

  render() {
    return (
      <div className="addReward">
        {/* <Header pageTitle='Add Reward' /> */}
        <form className='addReward-form' onSubmit={this.addReward}>
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
