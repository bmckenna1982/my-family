import React, { Component } from 'react'
import './list.css'

class List extends Component {
  render() {
    return (
      <div class='shoppingList_container'>
        <ul class='shoppingList'>
          <li class='shoppingList_item'>
            <div class='checkbox'>☑</div>
            <div class='item_desc'>Milk</div>
          </li>
          <li class='shoppingList_item'>
            <div class='checkbox'>☐</div>
            <div class='item_desc'>Yogurt</div>
          </li>
          <li class='shoppingList_item'>
            <div class='checkbox'>☐</div>
            <div class='item_desc'>Swiss Cheese</div>
          </li>
          <li class='shoppingList_item'>
            <div class='checkbox'>☐</div>
            <div class='item_desc'>Coffee Creamer</div>
          </li>
        </ul>
      </div>
    )
  }
}

export default List