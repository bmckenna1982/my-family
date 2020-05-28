import React, { Component } from 'react'
import AppContext from '../context/appContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import './listInput.css'
import ListItemsService from '../services/listItems-service'

class ListInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newItem: ''
    }
  }

  static contextType = AppContext

  handleChange = event => {
    this.setState({
      newItem: event.target.value
    })
  }

  handleClick = event => {
    if (this.state.newItem.length > 1) {
      const newListItem = {
        title: this.state.newItem,
        list_id: this.props.list.id
      }
      ListItemsService.postListItem(newListItem)
        .then(res => {
          this.setState({ newItem: '' })
          this.context.addListItem(res)
        })
    }

  }

  render() {
    return (
      <div className='list-input'>
        <input type='text' aria-label="list item" name='list-input-title' placeholder={'List item name'} onChange={this.handleChange} value={this.state.newItem} />
        <button type='button' aria-label="add list item" className='add-to-list' onClick={this.handleClick} >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    )
  }
}

export default ListInput