import React, { Component } from 'react'
import AppContext from '../context/appContext'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import './listInput.css'

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

    render() {
        return(
            <div className='list-input'>
              <input type='text' name='list-input-title' id='list-input-title' placeholder='List item name' onChange={this.handleChange} value={this.state.newItem} />
              <div className='add-to-list' onClick={() => this.context.addToList(this.props.listName, this.state.newItem)} >
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
        )
    }
}

export default ListInput