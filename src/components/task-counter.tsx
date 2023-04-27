export function TaskCounter() {
  return (
    <section className="w-full flex justify-between">
      <div className="flex items-center align-center gap-2">
        <b className="text-blue text-sm">Tarefas criadas</b>
        <b className="text-gray-100 text-xs bg-gray-400 px-3 rounded-full">0</b>
      </div>
      <div className="flex items-center align-center gap-2">
        <b className="text-purple text-sm">Concluídas</b>
        <b className="text-gray-100 text-xs bg-gray-400 px-3 rounded-full">2 de 5</b>
      </div>
    </section>
  )
}
