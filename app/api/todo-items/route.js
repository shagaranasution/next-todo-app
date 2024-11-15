import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'data.json');

export async function GET() {
  const data = fs.readFileSync(dataFilePath, 'utf-8');

  return new Response(data, {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
  const newTask = await request.json();
  const newData = [
    ...data,
    {
      id: data.length + 1,
      name: newTask.name,
      isCompleted: newTask.isCompleted,
      isRemoved: false,
    },
  ];
  fs.writeFileSync(dataFilePath, JSON.stringify(newData, null, 2));

  return new Response(JSON.stringify(newTask), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function PUT(request) {
  const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
  const taskId = await request.json();
  const updatedData = data.map((item) => {
    if (item.id === taskId) {
      return {
        ...item,
        isCompleted: !item.isCompleted,
      };
    }

    return item;
  });
  fs.writeFileSync(dataFilePath, JSON.stringify(updatedData, null, 2));

  return new Response(
    JSON.stringify({
      code: 200,
      message: `Item has been successfully updated for id = ${taskId}`,
    }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
}

export async function DELETE(request) {
  const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
  const taskId = await request.json();
  const newData = data.filter((item) => item.id !== taskId);
  fs.writeFileSync(dataFilePath, JSON.stringify(newData, null, 2));

  return new Response(
    JSON.stringify({
      code: 200,
      message: `Item has been successfully deleted for id = ${taskId}`,
    }),
    {
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
