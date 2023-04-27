import './index.css';
import todoLogo from './assets/logo.svg';
import { TaskCounter } from './components/task-counter';
import { AddTodo } from './components/add-todo';
import { TodoList } from './components/todo-list';
import { useState } from 'react';

export type Todo = {
  isCompleted: boolean;
  description: string;
  id: number;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleDeleteTodo(id: Todo['id']): void {
    const todosWithoutDeletedOne = todos.filter(todo => todo.id !== id);

    setTodos(todosWithoutDeletedOne);
  }

  function handleToggleTodo(id: Todo['id']): void {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const toggledTodo = todos[todoIndex] = { ...todos[todoIndex], isCompleted: !todos[todoIndex].isCompleted };
    const newTodos = todos.map((todo, index) => {
      return index === todoIndex ? toggledTodo : todo;
    });
    setTodos(newTodos);
  }

  function handleAddTodo(description: Todo['description']): void {
    setTodos((state) => [...state, { id: state.length + 1, isCompleted: false, description }]);
  }

  return (
    <>
      <div className="w-full h-52 bg-gray-700" />
      <div className="max-w-2xl mx-auto flex flex-col items-center align-center gap-14 -mt-[8.3rem]">
        <img src={todoLogo} alt="" />
        <AddTodo onAddTodo={handleAddTodo} />
        <TaskCounter todos={todos} />
        <TodoList todos={todos} onDelete={handleDeleteTodo} onToggle={handleToggleTodo} />
      </div>
    </>
  )
}

export default App
