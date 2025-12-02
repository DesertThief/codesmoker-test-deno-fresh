# CodeSmoker Test: Deno Fresh (#16)

A test repository for the CodeSmoker test suite demonstrating a Deno Fresh web application.

## Project Structure

```
├── routes/
│   ├── _app.tsx           # App wrapper
│   ├── _404.tsx           # 404 page
│   ├── index.tsx          # Home page
│   └── api/
│       └── todos/
│           ├── index.ts   # GET/POST todos
│           └── [id].ts    # GET/PUT/DELETE todo by id
├── islands/
│   └── Counter.tsx        # Interactive counter component
├── static/
│   └── styles.css         # Stylesheet
├── deno.json              # Deno configuration
├── main.ts                # Application entry point
├── fresh.config.ts        # Fresh configuration
└── fresh.gen.ts           # Generated manifest
```

## Features

- **Deno Runtime**: Secure JavaScript/TypeScript runtime
- **Fresh Framework**: Zero-config, zero-build web framework
- **Islands Architecture**: Minimal client-side JavaScript
- **File-based Routing**: Routes defined by file structure
- **Preact**: Lightweight React-compatible UI library

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/todos` | Get all todos |
| POST | `/api/todos` | Create a new todo |
| GET | `/api/todos/:id` | Get todo by ID |
| PUT | `/api/todos/:id` | Update a todo |
| DELETE | `/api/todos/:id` | Delete a todo |

## Getting Started

### Prerequisites

- Deno >= 1.38.0

### Install Deno

```bash
# macOS/Linux
curl -fsSL https://deno.land/install.sh | sh

# Windows
irm https://deno.land/install.ps1 | iex
```

### Development

```bash
deno task dev
```

Server runs at http://localhost:8000

### Build

```bash
deno task build
```

### Start Production

```bash
deno task start
```

### Check & Lint

```bash
deno task check
deno task ok  # format + lint + check
```

## Islands Architecture

Interactive components are placed in the `islands/` directory:

```tsx
import { useSignal } from "@preact/signals";

export default function Counter(props: { start: number }) {
  const count = useSignal(props.start);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => count.value++}>+1</button>
    </div>
  );
}
```

## Documentation

Built using latest documentation from:
- [Fresh](https://fresh.deno.dev) - Fresh framework documentation
- [Deno](https://deno.land) - Deno runtime documentation

---

*This is a CodeSmoker test repository*
