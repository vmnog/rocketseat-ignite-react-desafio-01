import { FormEvent, useRef, useState } from 'react';
import plusSign from '../assets/plus.svg';
import { Todo } from '../App';

interface AddTodoProps {
  onAddTodo: (description: Todo['description']) => void;
}

export function AddTodo({ onAddTodo }: AddTodoProps) {
  const [description, setDescription] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  function handleInvalid(): void {
    if (inputRef.current) {
      inputRef.current.setCustomValidity('Este campo é obrigatório');
    }
  };

  function handleInput(): void {
    if (inputRef.current) {
      inputRef.current.setCustomValidity('');
    }
  };


  function handleSubmit(event: FormEvent): void {
    event.preventDefault();

    onAddTodo(description);

    setDescription('');
  }

  return (
    <form className="w-full flex gap-4" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        required
        autoFocus
        value={description}
        onInput={handleInput}
        onInvalid={handleInvalid}
        onChange={(event) => setDescription(event.target.value)}
        className="w-full h-14 bg-gray-500 rounded-lg shadow-inner p-4 placeholder:text-gray-300 text-base text-gray-100 outline-none focus:outline-2 focus:outline-purpleDark"
        placeholder="Adicione uma nova tarefa"
      />
      <button className="w-24 h-14 p-4 gap-2 bg-blueDark hover:bg-blue ease-in duration-300 pointer rounded-lg flex items-center justify-between text-sm text-gray-100 font-bold" type="submit">
        <span>Criar</span>
        <img src={plusSign} alt="" className="flex-none" />
      </button>
    </form>
  )
}
