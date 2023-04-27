import './index.css';
import todoLogo from './assets/logo.svg';
import { TaskCounter } from './components/task-counter';
import { AddTodo } from './components/add-todo';
import { TodoList } from './components/todo-list';

function App() {
  return (
    <>
      <div className="w-full h-52 bg-gray-700" />
      <div className="max-w-[46rem] mx-auto flex flex-col items-center align-center gap-14 -mt-[8.3rem]">
        <img src={todoLogo} alt="" />
        <AddTodo />
        <TaskCounter />
        <TodoList />

      </div>
    </>
  )
}

export default App
