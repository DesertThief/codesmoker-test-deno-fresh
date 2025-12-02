import { Handlers } from "$fresh/server.ts";

export interface Todo {
  id: number;
  name: string;
  isComplete: boolean;
}

// In-memory database
const todos: Todo[] = [
  { id: 1, name: "Learn Deno", isComplete: false },
  { id: 2, name: "Build Fresh app", isComplete: false },
];

let nextId = 3;

export function getTodos(): Todo[] {
  return todos;
}

export function getTodoById(id: number): Todo | undefined {
  return todos.find((t) => t.id === id);
}

export function createTodo(name: string, isComplete = false): Todo {
  const todo: Todo = { id: nextId++, name, isComplete };
  todos.push(todo);
  return todo;
}

export function updateTodo(
  id: number,
  updates: Partial<Omit<Todo, "id">>
): Todo | null {
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) return null;
  todos[index] = { ...todos[index], ...updates };
  return todos[index];
}

export function deleteTodo(id: number): boolean {
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) return false;
  todos.splice(index, 1);
  return true;
}

export const handler: Handlers = {
  GET(_req) {
    return new Response(JSON.stringify(getTodos()), {
      headers: { "Content-Type": "application/json" },
    });
  },

  async POST(req) {
    const body = await req.json();
    const todo = createTodo(body.name, body.isComplete);
    return new Response(JSON.stringify(todo), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  },
};
