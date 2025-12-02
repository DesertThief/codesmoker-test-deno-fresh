import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fresh Todo App</title>
      </Head>
      <div class="page">
        <div class="hero">
          <h1>🍋 Fresh Todo App</h1>
          <p>A simple todo app built with Deno Fresh</p>
        </div>
        <Counter start={3} />
        <div class="api-info">
          <h2>API Endpoints</h2>
          <ul>
            <li><code>GET /api/todos</code> - Get all todos</li>
            <li><code>POST /api/todos</code> - Create a todo</li>
            <li><code>GET /api/todos/:id</code> - Get a todo by ID</li>
            <li><code>PUT /api/todos/:id</code> - Update a todo</li>
            <li><code>DELETE /api/todos/:id</code> - Delete a todo</li>
          </ul>
        </div>
      </div>
    </>
  );
}
