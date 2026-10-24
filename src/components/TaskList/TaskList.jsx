import { Component } from "react";
import TaskItem from "../TaskItem/TaskItem";
import css from "./TaskList.module.css"

class TaskList extends Component {
    render(){
        const {tasks, onDelete, onToggle} = this.props
        return(
            <ul className={css.list}>{tasks.map(({ title, completed, id}) => (
                <TaskItem 
                key={id} 
                title={title} 
                completed={completed} 
                onDelete={() => onDelete(id)}
                onToggle={() => onToggle(id)}
                />
            ))}</ul>
        )
    }
}


export default TaskList