import React, { Component } from "react"
import Task from '../task/task'
import AddItemLink from '../addItemLink/addItemLink'
import AppContext from '../context/appContext'
import TasksService from '../services/tasks-services'

class UpcomingTasks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    }
  }

  componentDidMount() {
    TasksService.getAllTasks()
      .then(data => {
        this.context.setTasks(data)
      })
      .catch(err => {
        this.setState({
          error: `Couldn't get tasks data at this time`
        })
      })
  }
  static contextType = AppContext

  render() {
    return (
      <section className='upcoming-tasks'>
        <h2>Upcoming Tasks</h2>
        <AddItemLink location='/add-task' itemName='Task' />
        <div className='tasks-container'>
          {this.context.tasks.filter(task => task.complete === false).slice(0, 5).map((task, index) => (
            <Task key={task.id} title={task.title} points={task.points} checked={task.complete} taskId={task.id} index={index} />
          ))
          }
        </div>
        <div className='tasks'></div>
        <div className='tasks'></div>
      </section>
    )
  }
}

export default UpcomingTasks