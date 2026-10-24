
import { Component } from "react";

class TaskItem extends Component {
    render(){
        const {title, completed, onDelete, } = this.props
        return(
              <li>
                    <h2>{title}</h2>
                    <p>{completed? "виконано" : "в процесі"}</p>
                    <input type="checkbox" name="" id="" />
                    <button onClick={onDelete} type="button">Видалити</button>
                </li>
        )
    }
}

export default TaskItem
