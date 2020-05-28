import React, { Component } from 'react'
import AppContext from '../context/appContext'
import ListInput from '../listInput/listInput'
import List from '../list/list'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


import './latestLists.css'
import ListsService from '../services/lists-service'
import ListItemsService from '../services/listItems-service'


class LatestLists extends Component {
  static contextType = AppContext

  constructor(props) {
    super(props)
    this.state = {
      lists: [],
      newItem: ''
    }
  }

  componentDidMount() {
    ListsService.getAllLists()
      .then(data => {
        this.context.setLists(data)
      })

    ListItemsService.getAllListItems()
      .then(data => {
        this.context.setListItems(data)
      })

  }

  handleChange = event => {
    event.preventDefault()
    this.setState({
      newItem: event.target.value
    })
  }

  isOpen = list => {
    const openList = list.open
      ? <div>
        <ListInput list={list} />
        <List list={list} />
      </div>
      : ''
    return openList
  }

  render() {

    return (
      <section className='active-list'>
        <h2>Active Lists</h2>
        {this.context.lists.map((list, index) => (
          <div key={index} className={'latest-list-container ' + (list.open ? 'open' : '')}>
            <div className='latest-list-wrapper'>
              <div className='list-name'>{list.title}</div>
              <button type='button' className='icon-plus' onClick={() => this.context.toggleListOpen(index)}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            {this.isOpen(list)}
          </div>
        ))}
      </section>
    )
  }
}

export default LatestLists