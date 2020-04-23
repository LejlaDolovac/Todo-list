import React from "react";
import "../Todolistitem.css";

interface TodoListitemProps {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

export const TodoListitem: React.FC<TodoListitemProps> = ({
  todo,
  toggleTodo,
}) => {
  return (
    <li>
      <label className={todo.complete ? "complete" : undefined}>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={() => {
            todo.complete = !todo.complete;
            toggleTodo(todo);
          }}
        />
        {todo.text}
      </label>
    </li>
  );
};
