import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './addItemLink.css'

class AddItemLink extends Component {
  render() {
    console.log('this.props.itemName', this.props.itemName)
    const addText = this.props.itemName
      ? `Add ${this.props.itemName}`
      : ''

    return (
      <Link to={this.props.location} className='add-item-link'>
        <div className='icon-plus'>
          <FontAwesomeIcon icon={faPlus} />
        </div>
        {addText}
      </Link>
    )
  }
}

export default AddItemLink