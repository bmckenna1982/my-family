import React, { Component } from 'react'
import AddItemLink from '../addItemLink/addItemLink'
import AppContext from '../context/appContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


import './latestLists.css'


class LatestLists extends Component {
  static contextType = AppContext

  handleClick = () => {
    console.log('click add item')
  }

  render() {
    console.log('this.context.lists', this.context.lists)
    return (
      <section className='active-list'>
        <h2>Active Lists</h2>
        {this.context.lists.map((list, index) => (
          <div key={index} className='latest-list-container'>
            <div className='grocery-list'>{list.name}</div>
            <AddItemLink location='/add-list-item' />
          </div>
        ))}
      </section>
    )
  }
}

export default LatestLists