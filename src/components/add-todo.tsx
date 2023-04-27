import plusSign from '../assets/plus.svg';

export function AddTodo() {
  return (
    <div className="w-full flex gap-4">
      <input
        className="w-full h-14 bg-gray-500 rounded-lg shadow-inner p-4 placeholder:text-gray-300 text-base text-gray-100 outline-none focus:outline-2 focus:outline-purpleDark"
        placeholder="Adicione uma nova tarefa"
      />
      <button className="w-24 h-14 p-4 gap-2 bg-blueDark hover:bg-blue ease-in duration-300 pointer rounded-lg flex items-center justify-between text-sm text-gray-100 font-bold" type="submit">
        <span>Criar</span>
        <img src={plusSign} alt="" className="flex-none" />
      </button>
    </div>
  )
}
