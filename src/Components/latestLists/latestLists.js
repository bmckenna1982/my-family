import React, { Component } from 'react'
import AddItemLink from '../addItemLink/addItemLink'
import AppContext from '../context/appContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


import './latestLists.css'


class LatestLists extends Component {
  static contextType = AppContext

  constructor(props) {
    super(props)
    this.state = {
      lists: [],
      newItem: ''
    }
  }



  // componentDidMount() {
  //   this.setState({
  //     lists: this.context.lists
  //   })
  // }
  // listsOpen = () => {
  //   const listsStatus = this.context.lists.map(list => {
  //     list.open = false
  //     return list
  //   }
  //   )
  //   console.log('listsStatus', listsStatus)
  // }
  // handleClick = () => {
  //   console.log('click add item')
  // }

  handleChange = event => {
    event.preventDefault()
    this.setState({
      newItem: event.target.value
    })
  }

  render() {
    console.log('this.context', this.context.lists)
    return (
      <section className='active-list'>
        <h2>Active Lists</h2>
        {this.context.lists.map((list, index) => (
          <div key={index} className={'latest-list-container ' + (list.open ? 'open' : '')}>
            <div className='latest-list-wrapper'>
              <div className='grocery-list'>{list.name}</div>
              {/* <AddItemLink location='/add-list-item' /> */}
              <div className='icon-plus' onClick={() => this.context.toggleListOpen(index)}>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
            <div className='list-input'>
              <input type='text' name='list-input-title' id='list-input-title' placeholder='List item name' onChange={this.handleChange} value={this.state.newItem} />
              <div className='add-to-list' onClick={() => this.context.addToList(list.name, this.state.newItem)} >
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
          </div>
        ))}
      </section>
    )
  }
}

export default LatestLists