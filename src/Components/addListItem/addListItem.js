import React, { Component } from 'react'

class AddListItem extends Component {
  render() {
    return (
      <section>
        <Header pageTitle='Add Item' />
        <form className='addItem-form' onSubmit={this.addEvent}>
          <div>
            <select id='list' placeholder='Select a list' onChange={this.handleListChange} value={this.state.title} />
          </div>
          <div>
            <input type="text" name='title' id='title' placeholder='List item' onChange={this.handleTitleChange} value={this.state.title} />
          </div>
          <button className='bttn' type='submit' >Add Event</button>
        </form>
      </section >
    )
  }
}

export default AddListItem