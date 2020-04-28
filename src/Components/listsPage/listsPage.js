import React, { Component } from 'react'
import Header from '../header/header'
import List from '../list/list'
import TaskCheck from '../taskCheck/taskCheck'
import AddItemLink from '../addItemLink/addItemLink'
import ListInput from '../listInput/listInput'
import AppContext from '../context/appContext'
import './listsPage.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

class ListsPage extends Component {
  static contextType = AppContext

  render() {
    console.log('rendering')
    return (
      <div className='Shopping Lists'>
        <Header pageTitle='Shopping Lists' />
        {this.context.lists.map((list, index) =>
          (
            <section className={'list-container ' + (list.open ? 'open' : '')} key={index}>
              <h2>{list.name}</h2>
              {/* <AddItemLink itemName='Item' /> */}
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
              {/* <List /> */}
            </section>
          ))
        }
      </div>
    )
  }
}

export default ListsPage