
import { Component } from "react";
import css from "./TaskForm.module.css";

class TaskForm extends Component {
  render() {
    const {onSubmit, onChange, title} = this.props
    return (
      <form className={css.form} onSubmit={onSubmit}>
        <div className={css.field}>
          <label className={css.label} htmlFor="taskTitle">
            Назва завдання:
          </label>

          <input
            className={css.input}
            name="title"
            value={title}
            onChange={onChange}
            id="taskTitle"
            type="text"
            placeholder="Наприклад: Вивчити React"
          />
        </div>

        <button className={css.submitButton} type="submit">
          + Додати завдання
        </button>
      </form>
    );
  }
}

export default TaskForm;
