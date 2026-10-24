import { Component } from "react";
import css from "./TaskItem.module.css"


class TaskItem extends Component {
    render(){
        const {title, completed, onDelete, onToggle} = this.props
        return(
              <li className={css.item}>

              <input 
              className={css.checkbox}
              type="checkbox" 
              checked={completed}
              onChange={onToggle}
              />   

             <div className={css.content}>
             <h2 className={css.title}>{title}</h2>
             <p className={css.status}>{completed? "виконано" : "в процесі"}</p>
             </div>
                 
            <button 
            onClick={onDelete}
            type="button"
            className={css.button}
        >
            Видалити
            </button>
                </li>
        )
    }
}

export default TaskItem
