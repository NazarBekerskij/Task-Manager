import './App.css'
import { Component } from 'react'

import tasks from "./data/task.json"
console.log(tasks);

import TaskList from './components/TaskList/TaskList'



class App extends Component {
  state = {
    tasks,
    isShowModal: false,
  }


  handleDelete = (tasksId) => {
    this.setState((prev) => ({
      tasks: prev.tasks.filter((task) => task.id !== tasksId)
    }))
  }


  render(){
    const {tasks} = this.state 

    return(
      <>
      <TaskList 
      tasks={tasks}
      onDelete={this.handleDelete}
      />
      </>
    )
  }
}



export default App
