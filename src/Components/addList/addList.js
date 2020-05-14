import React, { Component } from 'react'
import AppContext from '../context/appContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

// import './addList.css'
import ListsService from '../services/lists-service'

class AddList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      newList: ''
    }
  }

  static contextType = AppContext

  handleChange = event => {
    this.setState({
      newList: event.target.value
    })
  }
  handleClick = event => {
    event.preventDefault()
    if (this.state.newList.length < 3) {
      return
    }
    const listToAdd = { title: this.state.newList }
    ListsService.postList(listToAdd)
      .then(res => {
        this.context.addList(res)
      })
  }

  render() {
    return (
      <div className='list-input'>
        <input type='text' name='list-input-title' id='list-input-title' placeholder={'New List Name'} onChange={this.handleChange} value={this.state.newList} />
        {/* <div className='add-to-list' onClick={() => this.context.addToList(this.props.listName, this.state.newList)} > */}
        <div className='add-to-list' onClick={this.handleClick} >
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
    )
  }
}

export default AddList