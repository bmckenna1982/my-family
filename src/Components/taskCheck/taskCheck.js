import React, { Component } from "react";

class TaskCheck extends Component {
  // handleChange = (e) => {
  //   e.preventDefault()
  //   e.target.checked = !e.target.checked
  // }

  render() {
    let itemChecked = this.props.checked
    return (
      <input className='task-check' type='checkbox' name='task1' id='task1' onChange={this.handleChange} />

    )
  }
}

export default TaskCheck