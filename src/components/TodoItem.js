import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  render() {
    const { text, checked, id, onToggle, onRemove } = this.props;

    return (
      <div className="todo-item" onClick={() => onToggle(id)}>
        <div
          className="remove"
          onClick={e => {
            e.stopPropagation();
          }}
        >
          &times;
        </div>

        <div className={`todo-text ${checked && "checked"}`}>
          <div>{text}</div>
        </div>
      </div>
    );
  }
}

export default TodoItem;
