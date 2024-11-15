import React from 'react';

export default function TodoItem({ name, completed, onToggle, onDelete }) {
  return (
    <div className="flex flex-1 bg-white dark:bg-slate-800 border rounded-lg p-4 gap-4">
      <div className="flex grow gap-4">
        <p className="text-lg">{name}</p>
        <p
          className="self-center text-center text-slate-50 text-xs font-semibold px-3 py-1 rounded-2xl"
          style={{ background: completed ? '#15803d' : '#ea580c' }}>
          {completed ? 'Done' : 'Pending'}
        </p>
      </div>
      <div className="flex grow-0 flex-row gap-2">
        <button onClick={onToggle}>{completed ? 'Undone' : 'Done'}</button>
        <div className="h-[100%] border-[0.5px] border-black dark:border-white" />
        <button onClick={onDelete}>Remove</button>
      </div>
    </div>
  );
}
