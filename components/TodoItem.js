import React from 'react';

export default function TodoItem({ name, completed }) {
  return (
    <div className="flex flex-1 bg-white dark:bg-slate-800 border rounded-lg p-4 gap-4">
      <div className="flex flex-col grow gap-4">
        <p className="text-lg">{name}</p>
      </div>
      <div className="flex grow-0">
        <button>Make {completed ? 'Undone' : 'Done'}</button>
      </div>
    </div>
  );
}
