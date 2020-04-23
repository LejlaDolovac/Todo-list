import React, { useState } from "react";
import TodoList from "./components/TodoList";
import { AddTodoForm } from "./components/AddTodoForm";

const initialTodos: Array<Todo> = [
  { text: "Walking dog", complete: true },
  { text: "Buy milk", complete: false },
  { text: "Go to the gym", complete: false },
  { text: "Pick up the kids", complete: false },
];
const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  const addTodo: AddTodo = (newTodo) => {
    newTodo.trim() !== "" &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <AddTodoForm addTodo={addTodo} toggleTodo={toggleTodo} />
    </>
  );
};

export default App;
