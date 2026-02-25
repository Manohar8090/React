import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, { task: newTodo, id: uuidv4() }]);
    setNewTodo("");
  };

  let deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  let upperCaseAll = () => {
    setTodos(
      todos.map((todo) => ({
        ...todo,
        task: todo.task.toUpperCase(),
      }))
    );
  };


  return (
    <div>
      <input
        placeholder="Add a task"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <br />
      <br />
      <button onClick={addNewTask}>Add task</button>

      <hr />
      <h4>Tasks Todo</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <br />
      <button onClick={upperCaseAll}>Uppercase All</button>
    </div>
  );
}
