import React, { Component } from "react";
import AppContext from '../context/appContext'
import ListItemsService from "../services/listItems-service";

import './listCheck.css'

class ListCheck extends Component {
  static contextType = AppContext

  handleChange = (e) => {
    e.preventDefault()
    const listItemToUpdateId = this.props.listItemId
    //need to also get logged in user and send user_id so points will be added
    const fieldsToUpdate = {
      checked: e.target.checked,
    }
    ListItemsService.updateListItem(listItemToUpdateId, fieldsToUpdate)
      .then(() => {
        ListItemsService.getAllListItems()
          .then(res => {
            this.context.setListItems(res)
          })
      })


  }

  render() {
    let itemChecked = this.props.checked
    const listItemId = this.props.taskId
    return (
      <input className='listItem-check' type='checkbox' name={`listItem-${listItemId}`} id={`listItem-${listItemId}`} onChange={this.handleChange} checked={itemChecked} />

    )
  }
}

export default ListCheck