import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './addItemLink.css'

class AddItemLink extends Component {
  render() {
    return (
      <div className='icon-plus' onClick={this.handleClick}>
        <FontAwesomeIcon icon={faPlus} /> Add {this.props.itemName}
      </div>
    )
  }
}

export default AddItemLink