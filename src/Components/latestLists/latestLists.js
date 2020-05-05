import React, { Component } from 'react'
import AddItemLink from '../addItemLink/addItemLink'
import AppContext from '../context/appContext'
import ListInput from '../listInput/listInput'
import List from '../list/list'

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
    const listRender = this.context.lists.map((list, index) => {
      let openList = list.open
        ? (<ListInput listName={list.name} />
          <List list={list} />)
        : ''
      return <div key={index} className='latest-list-container'>
        <div className='latest-list-wrapper'>
          <div className='grocery-list'>{list.name}</div>
          {/* <AddItemLink location='/add-list-item' /> */}
          <div className='icon-plus' onClick={() => this.context.toggleListOpen(index)}>
            <FontAwesomeIcon icon={faPlus} />
          </div>
          {openList}
        </div>
      </div>
    })

    return (
      <section className='active-list'>
        <h2>Active Lists</h2>
        {listRender}
        {/* {this.context.lists.map((list, index) => (
          <div key={index} className={'latest-list-container ' + (list.open ? 'open' : '')}>
            <div className='latest-list-wrapper'>
              <div className='grocery-list'>{list.name}</div>
              <div className='icon-plus' onClick={() => this.context.toggleListOpen(index)}>
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
            <ListInput listName={list.name} />
          </div>
        ))} */}
      </section>
    )
  }
}

export default LatestLists