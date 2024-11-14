'use client';

import Image from 'next/image';
import TodoItem from '@/components/TodoItem';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [inputTodo, setInputTodo] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const response = await fetch('/api/todo-items');
    const todos = await response.json();

    setTodos(todos);
  };

  const postTodo = async () => {
    const newTodo = {
      name: inputTodo,
      isCompleted: false,
    };

    await fetch('/api/todo-items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });

    setInputTodo('');
    fetchTodos();
  };

  const handleInputChange = (e) => {
    setInputTodo(e.target.value);
  };

  const handleSubmit = () => {
    postTodo();
  };

  return (
    <div className="flex flex-col flex-1 gap-4">
      <h1 className="text-4xl font-bold text-center">Todo App</h1>
      <section className="flex gap-4 h-12">
        <input
          value={inputTodo}
          onChange={handleInputChange}
          className="flex grow bg-white dark:bg-slate-800 border rounded-md outline-none pl-2 pr-4"
          placeholder="Feeding my kitten"
          type="text"
        />
        <button
          onClick={handleSubmit}
          className="flex grow-0 justify-center items-center bg-blue-500 rounded-md w-24 h-[100%]">
          Submit
        </button>
      </section>
      <section className="flex flex-col gap-4">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id.toString()}
            name={todo.name}
            completed={todo.isCompleted}
          />
        ))}
      </section>
    </div>
  );
}
