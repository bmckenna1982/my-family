import React, { Component } from 'react'
import AppContext from '../context/appContext'
import './list.css'

class List extends Component {
  static contextType = AppContext
  render() {
    return (
      <section className='list-container'>
        <h2>{this.props.list.name}</h2>
        <div className='icon-plus' onClick={() => this.context.toggleListOpen(index)}>
          <FontAwesomeIcon icon={faPlus} /> Add Item
              </div>
        <ListInput listName={this.props.list.name} />
        {this.props.list.items.map((item, index) => (
          <div className='list-item-container' key={item.itemName}>
            <TaskCheck checked={item.checked} />
            <div className='list-item'>{item.itemName}</div>
          </div>
        ))}
        {/* <List /> */}
      </section>
    )
  }
}

export default List