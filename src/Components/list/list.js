import React, { Component } from 'react'
import ListCheck from '../listCheck/listCheck'
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
      lists: [
        {
          id: null,
          listItems: [],
        }
      ],
      id: null,
      listItems: [],
      // listItems: [],
      open: false
    }
  }

  static contextType = AppContext

  renderList = () => {
    const currentListItems = this.context.listItems.filter(item => item.list_id === this.props.list.id) || null
    const renderDisplay = currentListItems
      ? currentListItems.map((item, index) => (
        <div className='list-item-container' key={item.id}>
          <ListCheck checked={item.checked} listItemId={item.id} />
          <div className='list-item'>{item.title}</div>
        </div>
      ))
      : ''
    return renderDisplay
  }

  render() {
    return (
      // <div>{this.props.list.title}</div>
      <div className={'list-container ' + (this.state.open ? 'open' : '')}>
        {this.renderList()}
      </div>
    )
  }
}

export default List