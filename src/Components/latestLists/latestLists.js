import React, { Component } from 'react'

class LatestLists extends Component {
  render() {
    return (
      <section className='active-list'>
        <h2>Active Lists</h2>
        <div className='grocery-list'>Groceries</div>
        <div className='shopping-list'>Shopping</div>
      </section>
    )
  }
}

export default LatestLists