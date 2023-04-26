import './index.css';
import todoLogo from './assets/logo.svg';
import plusSign from './assets/plus.svg';
import task from './assets/task.svg';

function App() {
  return (
    <>
      <div className="w-full h-52 bg-gray-700" />
      <div className="max-w-[46rem] mx-auto flex flex-col items-center align-center gap-14 -mt-[8.3rem]">
        <img src={todoLogo} alt="" />
        <div className="flex gap-4">
          <input
            className="w-[638px] h-14 bg-gray-500 rounded-md shadow-inner p-4 placeholder:text-gray-300 text-base text-gray-100 outline-none focus:outline-2 focus:outline-purpleDark"
            placeholder="Adicione uma nova tarefa"
          />
          <button className="w-[90px] h-14 bg-blueDark hover:bg-blue ease-in duration-300 pointer rounded-md flex items-center align-center gap-2 text-sm text-gray-100 font-bold p-4" type="submit">
            <span>Criar</span>
            <img src={plusSign} alt="" />
          </button>
        </div>
        <section className="w-full flex justify-between">
          <div className="flex items-center align-center gap-2 text-sm ">
            <b className="text-blue">Tarefas criadas</b>
            <b className="text-gray-100 bg-gray-400 px-3 rounded-full">0</b>
          </div>
          <div className="flex items-center align-center gap-2 text-sm ">
            <b className="text-purple">Concluídas</b>
            <b className="text-gray-100 bg-gray-400 px-3 rounded-full">0</b>
          </div>
        </section>
        <section className="flex flex-col items-center text-gray-300">
          <img src={task} alt="" className="w-[3.5rem]" />

          <b className="mt-4">Você ainda não tem tarefas cadastradas</b>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </section>
      </div>
    </>
  )
}

export default App
