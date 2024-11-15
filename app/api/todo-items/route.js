import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'data.json');

export async function GET() {
  const data = fs.readFileSync(dataFilePath, 'utf-8');
  const body = JSON.stringify({
    success: true,
    message: 'Todo items retrieved successfully.',
    data: JSON.parse(data),
    error: null,
    erroCode: null,
  });

  return new Response(body, {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(request) {
  const data = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
  const { name, isCompleted } = await request.json();

  if (typeof name !== 'string' || name.trim().length === '') {
    const body = JSON.stringify({
      success: false,
      message: 'Fail to create a task.',
      data: null,
      error: 'Invalid input: Title must be a non-empty string.',
      errorCode: 'INVALID_TITLE_INPUT',
    });
    return new Response(body, {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  if (name.trim().length > 100) {
    const body = JSON.stringify({
      success: false,
      message: 'Fail to create a task.',
      data: null,
      error: 'Invalid input: Title must be more than 100 length.',
      errorCode: 'MAX_TITLE_LENGTH',
    });
    return new Response(body, {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const newTask = {
    id: data.length + 1,
    name: name,
    isCompleted: isCompleted,
    isRemoved: false,
  };

  const newData = [...data, newTask];
  fs.writeFileSync(dataFilePath, JSON.stringify(newData, null, 2));
  const body = JSON.stringify({
    success: true,
    message: 'Task created successfully.',
    data: newTask,
    error: null,
    errorCode: null,
  });

  return new Response(body, {
    status: 201,
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
      success: true,
      message: `Task updated successfully.`,
      data: { id: taskId },
      error: null,
      errorCode: null,
    }),
    {
      status: 201,
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
      success: true,
      message: `Task deleted successfully.`,
      data: { id: taskId },
      error: null,
      errorCode: null,
    }),
    {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
