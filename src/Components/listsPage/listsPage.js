import React, { Component } from 'react'
import Header from '../header/header'
import List from '../list/list'
import TaskCheck from '../taskCheck/taskCheck'
import AddItemLink from '../addItemLink/addItemLink'
import AddList from '../addList/addList'
import AppContext from '../context/appContext'
import ListsService from '../services/lists-service'
import './listsPage.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class ListsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      createOpen: false
    }
  }
  static contextType = AppContext

  componentDidMount() {
    ListsService.getAllLists()
      .then(data => {
        console.log('list-data', data)
        this.context.setLists(data)
      })
      .catch(err => {
        this.setState({
          error: `Couldn't get tasks data at this time`
        })
      })
  }

  renderLists = () => {
    console.log('this.context.lists', this.context.lists)
    const listsDisplay = this.context.lists[0]
      ? this.context.lists.map((list, index) =>
        (
          <List key={list.title} list={list} />
          // <section className={'list-container ' + (list.open ? 'open' : '')} key={index}>
          //   <h2>{list.name}</h2>
          //   <div className='icon-plus' onClick={() => this.context.toggleListOpen(index)}>
          //     <FontAwesomeIcon icon={faPlus} /> Add Item
          //     </div>
          //   <ListInput listName={list.name} />
          //   {list.items.map((item, index) => (
          //     <div className='list-item-container' key={item.itemName}>
          //       <TaskCheck checked={item.checked} />
          //       <div className='list-item'>{item.itemName}</div>
          //     </div>
          //   ))}
          // </section>
        ))
      : ''
    return listsDisplay
  }

  renderCreateList = () => {
    const createListDisplay = this.state.createOpen
      ? <AddList callBack={(newItem) => this.context.addList(newItem)} placeholder='New List Title' />
      : ''
    return createListDisplay
  }

  handleClick = (e) => {
    e.preventDefault()
    this.setState({
      createOpen: true
    })
  }

  render() {
    console.log('rendering')
    const currentLists = this.context.lists
    return (
      <div className='Shopping Lists'>
        <Header pageTitle='Shopping Lists' />
        {/* <AddItemLink itemName='List' /> */}
        <div className='icon-plus' onClick={this.handleClick}>
          <FontAwesomeIcon icon={faPlus} />
          Create List
        </div>

        {this.renderCreateList()}
        {this.renderLists()}
        {/* {this.context.lists && this.context.lists.map((list, index) =>
          (
            <section className={'list-container ' + (list.open ? 'open' : '')} key={index}>
              <h2>{list.name}</h2>              
              <div className='icon-plus' onClick={() => this.context.toggleListOpen(index)}>
                <FontAwesomeIcon icon={faPlus} /> Add Item
              </div>
              <ListInput listName={list.name} />
              {list.items.map((item, index) => (
                <div className='list-item-container' key={item.itemName}>
                  <TaskCheck checked={item.checked} />
                  <div className='list-item'>{item.itemName}</div>
                </div>
              ))}              
            </section>
          ))
        } */}
      </div>
    )
  }
}

export default ListsPage