import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemeve } = this.props;

    const todoList = todos.map(({ id, text, checked }) => (
      <TodoItem
        id={id}
        text={text}
        checked={checked}
        onToggle={onToggle}
        onRemeve={onRemeve}
        key={id}
      />
    ));

    return (
      <div>
        {todoList}
      </div>
    );
  }
}

export default TodoItemList;
