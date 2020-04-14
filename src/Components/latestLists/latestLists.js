import React, { Component } from 'react'

class LatestLists extends Component {
  render() {
    return (
      <section className='activeList'>
        <h2>Active Lists</h2>
        <div className='groceryList'>Groceries</div>
        <div className='shoppingList'>Shopping</div>
      </section>
    )
  }
}

export default LatestLists