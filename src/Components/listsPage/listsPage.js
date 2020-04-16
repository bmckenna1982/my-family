import React, { Component } from 'react'
import Header from '../header/header'
import './listsPage.css'

class ListsPage extends Component {
  render() {
    return (
      <div className='Shopping Lists'>
        <Header title='Shopping Lists' />
        <section>
          <h2>Groceries</h2>
          <div class='add_item'>+ Add Item </div>
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
        </section>
      </div>
    )
  }
}

export default ListsPage