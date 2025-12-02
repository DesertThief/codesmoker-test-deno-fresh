import { Handlers } from "$fresh/server.ts";
import { deleteTodo, getTodoById, updateTodo } from "./index.ts";

export const handler: Handlers = {
  GET(_req, ctx) {
    const id = parseInt(ctx.params.id);
    const todo = getTodoById(id);
    
    if (!todo) {
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
    
    return new Response(JSON.stringify(todo), {
      headers: { "Content-Type": "application/json" },
    });
  },

  async PUT(req, ctx) {
    const id = parseInt(ctx.params.id);
    const body = await req.json();
    const todo = updateTodo(id, body);
    
    if (!todo) {
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
    
    return new Response(null, { status: 204 });
  },

  DELETE(_req, ctx) {
    const id = parseInt(ctx.params.id);
    const deleted = deleteTodo(id);
    
    if (!deleted) {
      return new Response(JSON.stringify({ error: "Not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }
    
    return new Response(null, { status: 204 });
  },
};
