import React, {
  useState,
  ChangeEvent,
  MouseEvent,
  useRef,
  useEffect,
} from "react";

interface AddTodoFormProps {
  addTodo: AddTodo;
  toggleTodo: ToggleTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e: MouseEvent) => {
    const newVal = inputRef && inputRef.current && inputRef.current.value;
    newVal && setNewTodo(newVal);
    addTodo(newTodo);
    setNewTodo("");
    e.preventDefault();
  };

  return (
    <form>
      <input
        className="AddInput"
        type="text"
        value={newTodo}
        ref={inputRef}
        onChange={handleChange}
      />
      <button className="AddBtn" type="submit" onClick={handleSubmit}>
        Add Todo
      </button>
    </form>
  );
};
