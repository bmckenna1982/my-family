import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './latestLists.css'

class LatestLists extends Component {
  handleClick = () => {
    console.log('click add item')
  }

  render() {

    return (
      <section className='active-list'>
        <h2>Active Lists</h2>
        <div className='latest-list-container'>
          <div className='grocery-list'>Groceries</div>
          <div className='icon-plus' onClick={this.handleClick}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
        <div className='latest-list-container'>
          <div className='shopping-list'>Shopping</div>
          <div className='icon-plus' onClick={this.handleClick}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      </section>
    )
  }
}

export default LatestLists