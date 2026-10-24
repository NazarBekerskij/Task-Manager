import './App.css'
import { Component } from 'react'

import Modal from './components/Modal/Modal'
import tasks from "./data/task.json"
import TaskList from './components/TaskList/TaskList'
import Title from './components/Title/Title'

import { nanoid } from 'nanoid'


class App extends Component {
  state = {
    tasks,
    isShowModal: false,
    title: "",
  }

  componentDidMount(){
    const saveTasks = window.localStorage.getItem("tasks")

    if(saveTasks){
      this.setState({
        tasks: JSON.parse(saveTasks)
      })
    }
  }

  componentDidUpdate(_, prevState){
    if(prevState.tasks.length !== this.state.tasks.length){
      window.localStorage.setItem("tasks", JSON.stringify(this.state.tasks))
    }
  }
  



  handleChange = (e) => {
    const {name, value} = e.target 

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const {title} = this.state 

    if(title.trim() === ""){return}

    const newTasks = {
      id: nanoid(),
      title,
      completed: false,
    }

    this.setState((prev) => ({
      tasks: [...prev.tasks, newTasks],
      title: "",
      isShowModal: false,
    }))
  }

  handleDelete = (tasksId) => {
    this.setState((prev) => ({
      tasks: prev.tasks.filter((task) => task.id !== tasksId)
    }))
  }

  handleToggle = (taskId) => {
    this.setState((prev) => ({
      tasks: prev.tasks.map(task => 
        task.id === taskId
        ? {...task, completed: !task.completed}
        : task
      )
    }))
  }

  handleOpenModal = () => {
    this.setState({
      isShowModal: true
    })
  }

  handleCloseModal = () => {
    this.setState({
      isShowModal: false
    })
  }

  render(){
    const {tasks, isShowModal, title} = this.state 

    return(
 <div className="taskContainer">
  <Title count={tasks.length} />

  <TaskList
    tasks={tasks}
    onToggle={this.handleToggle}
    onDelete={this.handleDelete}
  />

  <button className="addButton" onClick={this.handleOpenModal} type="button">
    + Додати завдання
  </button>
  {isShowModal && <Modal onCloseModal={this.handleCloseModal} onSubmit={this.handleSubmit} onChange={this.handleChange} title={title}/>}
</div>
    )
  }
}



export default App
