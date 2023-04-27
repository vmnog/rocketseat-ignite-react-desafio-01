import { useMemo } from "react";
import { Todo } from "../App";

interface TaskCounterProps {
  todos: Todo[];
}

export function TaskCounter({ todos }: TaskCounterProps) {
  const completedTodosCounter = useMemo(() => {
    const completedTodos = todos.filter((todo) => todo.isCompleted);

    return completedTodos.length;
  }, [todos]);

  return (
    <section className="w-full flex justify-between">
      <div className="flex items-center align-center gap-2">
        <b className="text-blue text-sm">Tarefas criadas</b>
        <b className="text-gray-100 text-xs bg-gray-400 px-3 rounded-full">{todos.length}</b>
      </div>
      <div className="flex items-center align-center gap-2">
        <b className="text-purple text-sm">Concluídas</b>
        <b className="text-gray-100 text-xs bg-gray-400 px-3 rounded-full">
          {completedTodosCounter > 0 ? (`${completedTodosCounter} de ${todos.length}`) : ('0')}
        </b>
      </div>
    </section>
  )
}
