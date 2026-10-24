import { Component } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";
import TaskForm from "../TaskForm/TaskForm";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  render() {
    const { onCloseModal, onSubmit, onChange, title} = this.props;

    return createPortal(
      <div className={css.overlay}>
        <div className={css.modal}>
          <h2 className={css.title}>Додати завдання</h2>

        <TaskForm
          onSubmit={onSubmit}
          onChange={onChange}
          title={title}
        />

          <button
            className={css.closeButton}
            type="button"
            onClick={onCloseModal}
          >
            Закрити
          </button>
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;