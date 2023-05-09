import { useState } from "react";

import "./app.css";
import { NewTodoForm } from './NewTodoForm';
import { TodoList } from './TodoList';

function App() {
  const [todo, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos((currentTodos) => [
          ...currentTodos,
          { id: crypto.randomUUID(), title, isCompleted: false },
        ]);
  }


  const toggleTodo = (id, isCompleted) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        return todo.id !== id ? todo : { ...todo, isCompleted };
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
