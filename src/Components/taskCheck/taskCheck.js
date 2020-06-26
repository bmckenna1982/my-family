import React, { Component } from "react";
import TasksService from "../services/tasks-services";
import AppContext from "../context/appContext";
class TaskCheck extends Component {
  static contextType = AppContext;

  handleChange = (e) => {
    e.preventDefault();
    const taskToUpdateId = this.props.taskId;
    const fieldsToUpdate = {
      complete: e.target.checked,
      completed_date: new Date(),
    };
    //need to send task id and checked: true
    TasksService.updateTask(taskToUpdateId, fieldsToUpdate).then(() => {
      TasksService.getAllTasks().then((res) => {
        this.context.setTasks(res);
      });
      //then need to update context currentUser to make points bar rerender?
      //instead look at loading of PointsBar data
    });
  };

  render() {
    let itemChecked = this.props.checked;
    const task_id = this.props.taskId;

    return (
      <input
        aria-label="task check"
        className="task-check"
        type="checkbox"
        name={`task-${task_id}`}
        id={`task-${task_id}`}
        onChange={this.handleChange}
        checked={itemChecked}
      />
    );
  }
}

export default TaskCheck;
