import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 gap-4">
      <h1 className="text-4xl font-bold text-center">Todo App</h1>
      <section className="flex flex-col gap-4">
        <div className="flex flex-1 border border-slate-500 rounded-lg p-4 gap-4">
          <div className="flex flex-col flex-1 gap-4">
            <p>Rading a book</p>
            <p>New</p>
          </div>
          <div className="flex flex-grow-1">
            <button>Make Done</button>
          </div>
        </div>

        <div className="flex flex-1 border border-slate-500 rounded-lg p-4 gap-4">
          <div className="flex flex-col flex-1 gap-4">
            <p>Rading a book</p>
            <p>New</p>
          </div>
          <div className="flex flex-grow-1">
            <button>Make Done</button>
          </div>
        </div>

        <div className="flex flex-1 border border-slate-500 rounded-lg p-4 gap-4">
          <div className="flex flex-col flex-1 gap-4">
            <p>Rading a book</p>
            <p>New</p>
          </div>
          <div className="flex flex-grow-1">
            <button>Make Done</button>
          </div>
        </div>

        <div className="flex flex-1 border border-slate-500 rounded-lg p-4 gap-4">
          <div className="flex flex-col flex-1 gap-4">
            <p>Rading a book</p>
            <p>New</p>
          </div>
          <div className="flex flex-grow-1">
            <button>Make Done</button>
          </div>
        </div>
      </section>
    </div>
  );
}
