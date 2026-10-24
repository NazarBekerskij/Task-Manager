import { Component } from "react";
import css from "./Title.module.css";

class Title extends Component {
  render() {
    const { count } = this.props;

    return (
      <div className={css.header}>
        <div>
          <h1 className={css.title}>My Tasks</h1>
          <p className={css.subtitle}>Мій список завдань</p>
        </div>

        <span className={css.count}>
          {count} завдань
        </span>
      </div>
    );
  }
}

export default Title;