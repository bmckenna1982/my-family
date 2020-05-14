import React, { Component } from 'react'
import TaskCheck from '../taskCheck/taskCheck'
import ListInput from '../listInput/listInput'
import AppContext from '../context/appContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './list.css'
import ListItemsService from '../services/listItems-service'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listItems: [],
      open: false
    }
  }

  static contextType = AppContext

  componentDidMount() {
    //get all the list items for this list
    ListItemsService.getAllListItems(this.props.list.id)
      .then(data =>
        // this.context.setListItems(data)
        this.setState({
          listItems: [
            ...this.state.listItems,
            ...data
          ]
        })
      )
  }

  renderList = () => {
    console.log('this.context.listItems', this.state.listItems)
    const renderDisplay = this.state.listItems
      ? this.state.listItems.map((item, index) => (
        <div className='list-item-container' key={item.title}>
          <TaskCheck checked={item.checked} listItemId={item.id} />
          <div className='list-item'>{item.title}</div>
        </div>
      ))
      : ''
    console.log('renderDisplay', renderDisplay)
    return renderDisplay
  }

  render() {
    return (
      // <div>{this.props.list.title}</div>
      <div className={'list-container ' + (this.state.open ? 'open' : '')}>
        {/* <h2>{this.props.list.title}</h2> */}
        {/* <div className='icon-plus' onClick={() => this.context.toggleListOpen(this.props.list.id)}>
          <FontAwesomeIcon icon={faPlus} /> Add Item
        </div>
        <ListInput listName={this.props.list.title} /> */}
        {this.renderList()}
      </div>
    )
    //   < div className = { 'list-container ' + (list.open ? 'open' : '') } key = { index } >
    //     <h2>{list.name}</h2>
    //     <div className='icon-plus' onClick={() => this.context.toggleListOpen(index)}>
    //       <FontAwesomeIcon icon={faPlus} /> Add Item
    //         </div>
    //     <ListInput listName={list.name} />
    //   {
    //   list.items.map((item, index) => (
    //     <div className='list-item-container' key={item.itemName}>
    //       <TaskCheck checked={item.checked} />
    //       <div className='list-item'>{item.itemName}</div>
    //     </div>
    //   ))
    // }
    // </div >
    //   <div className='list-container' >
    //     {this.props.list.items.map((item, index) => (
    //       <div className='list-item-container' key={item.itemName}>
    //         <TaskCheck checked={item.checked} />
    //         <div className='list-item'>{item.itemName}</div>
    //       </div>
    //     ))}
    //   </div>

  }
}

export default List