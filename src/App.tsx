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

const TODOS: Todo[] = [
  {
    id: 0,
    isCompleted: false,
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  },
  {
    id: 1,
    isCompleted: true,
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  },
  {
    id: 2,
    isCompleted: true,
    description: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
  }
]

function App() {
  const [todos, setTodos] = useState<Todo[]>(TODOS);

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

  return (
    <>
      <div className="w-full h-52 bg-gray-700" />
      <div className="max-w-[46rem] mx-auto flex flex-col items-center align-center gap-14 -mt-[8.3rem]">
        <img src={todoLogo} alt="" />
        <AddTodo />
        <TaskCounter todos={todos} />
        <TodoList todos={todos} onDelete={handleDeleteTodo} onToggle={handleToggleTodo} />
      </div>
    </>
  )
}

export default App
