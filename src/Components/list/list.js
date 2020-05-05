import React, { Component } from 'react'
import TaskCheck from '../taskCheck/taskCheck'
import AppContext from '../context/appContext'
import './list.css'

class List extends Component {
  static contextType = AppContext
  render() {
    return (
      <div className='list-container' >
        {this.props.list.items.map((item, index) => (
          <div className='list-item-container' key={item.itemName}>
            <TaskCheck checked={item.checked} />
            <div className='list-item'>{item.itemName}</div>
          </div>
        ))}
      </div>      
    )
  }
}

export default List