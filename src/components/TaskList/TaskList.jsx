import { Component } from "react";
import TaskItem from "../TaskItem/TaskItem";

class TaskList extends Component {
    render(){
        const {tasks, onDelete} = this.props
        return(
            <ul>{tasks.map(({ title, completed, id}) => (
                <TaskItem key={id} title={title} completed={completed} onDelete={() => onDelete(id)}/>
            ))}</ul>
        )
    }
}


export default TaskList