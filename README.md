# create-thiz-app

A modern CLI for scaffolding Express APIs with **file-based routing** and **zero configuration**. Get a production-ready backend up and running in seconds.

## Why create-thiz-app?

Stop copying boilerplate. Stop configuring routers. Start building.

This CLI generates a clean Express starter powered by **THIZ.js** — giving you file-based routing, convention-based middleware, hot reload, and a built-in route inspector out of the box. No webpack, no complex setup, just a backend that works.

## Quick Start

Create a new project with one command:
```bash
npx create-thiz-app my-api
cd my-api
npm run dev
```

That's it. Your API is live at `http://localhost:5000` with hot reload enabled.

## What Gets Generated

Running `create-thiz-app` scaffolds a complete Express starter with:

- **File-based routing** — create routes by adding files, no manual registration
- **Convention-based middleware** — `._global.js` files auto-apply to all routes
- **Hot reload** — instant updates during development via `@thizjs/dev`
- **Smart .env loading** — multi-file environment variable support with hot-reload
- **Route inspector** — visual web interface to explore your API structure
- **TypeScript ready** — write `.ts` or `.js`, both work seamlessly
- **MongoDB optional** — included but completely removable if you don't need it
- **Zero config** — sensible defaults, extensible when needed
- **Clean structure** — organized folders, clear patterns

## Installation Options

### NPX (Recommended)
```bash
npx create-thiz-app my-project-name
```

### Global Install
```bash
npm install -g create-thiz-app
create-thiz-app my-project-name
```

## What Happens During Setup

1. Creates project directory
2. Copies the THIZ.js Express template
3. Updates `package.json` with your project name
4. Generates `.env` from `.env.example`
5. Installs all dependencies automatically
6. Shows you exactly what to do next

**You get a working API immediately — no additional setup required.**

## Template Overview

The generated project includes:

### Core Features
- **Express server** with clean architecture
- **@thizjs/express** for file-based routing
- **CORS** and **Morgan** preconfigured
- **Mongoose** for MongoDB (optional)
- **Hot reload** development server
- **Route inspector** for API visualization
- **TypeScript support** ready to use
- **Environment variable management** with hot-reload

### Project Structure
```
my-api/
├── src/
│   ├── routes/          # File-based API routes
│   ├── middlewares/     # Convention-based middleware
│   ├── models/          # Mongoose models (optional)
│   ├── db/              # Database connection (optional)
│   ├── app.js           # Express setup
│   └── server.js        # Server entry point
├── .env                 # Environment variables
├── .env.example         # Template for environment vars
├── package.json
└── README.md            # Full documentation
```

### Example: Creating Routes

Just add files in `src/routes/`:
```javascript
// src/routes/users/GET.js
export default async (req, res) => {
  res.json({ users: [] });
};

// src/routes/users/[id]/GET.js
export default async (req, res) => {
  const { id } = req.params;
  res.json({ user: { id } });
};
```

Routes are automatically registered as:
- `GET /users`
- `GET /users/:id`

**No router configuration needed.**

### Example: Adding Middleware
```javascript
// src/middlewares/logger._global.js
export default (req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
};
```

The `._global.js` suffix makes it run on every request automatically.

## Route Inspector

Every project includes a built-in route inspector:
```bash
npm run routes
```

This launches a clean web interface at `http://localhost:3456` showing:

- **Route statistics** — total routes, HTTP methods breakdown
- **Middleware overview** — global and named middlewares
- **Route table** — complete list of endpoints with their middlewares and source files

Perfect for:
- Documenting your API structure
- Debugging routing issues
- Onboarding new team members
- Understanding middleware application

## Environment Variables

THIZ.js automatically loads environment variables from multiple `.env` files with smart priority and hot-reload support:

### Supported Files
1. `.env.local` — Highest priority, for local overrides (gitignored)
2. `.env.development` — Development-specific variables
3. `.env` — Base environment variables (can be committed)

### Hot-Reload
Edit `.env` files while developing and your server automatically restarts with the new values. No manual restart needed.

### Example Setup

**`.env`** (committed to git):
```bash
PORT=5000
NODE_ENV=development
LOG_LEVEL=info
```

**`.env.local`** (gitignored, for your local machine):
```bash
# Override port for local development
PORT=3000

# Local database
MONGO_URI=mongodb://localhost:27017/myapp_local

# Personal API keys
OPENAI_API_KEY=sk-...
STRIPE_SECRET_KEY=sk_test_...
```

## Commands

Once your project is created:
```bash
npm run dev     # Start with hot reload
npm start       # Production mode
npm run routes  # Launch route inspector
```

## MongoDB Usage

MongoDB is **included but optional**:

### Using MongoDB
1. Add your `MONGO_URI` to `.env`
2. Connection happens automatically
3. Use the example models in `src/models/`

### Skipping MongoDB
```bash
rm -rf src/db src/models
```
Everything else works perfectly without it.

## TypeScript Support

The template supports TypeScript out of the box:
```typescript
// src/routes/products/GET.ts
import { Request, Response } from 'express';

export default async (req: Request, res: Response) => {
  res.json({ products: [] });
};
```

Hot reload works with `.ts` files too!

## Deployment

The generated app works on any Node.js host:

- **Vercel**
- **Railway**
- **Render**
- **Heroku**
- **Fly.io**
- **DigitalOcean App Platform**

Just set environment variables and run:
```bash
npm install
npm start
```

## Philosophy

**create-thiz-app** and **THIZ.js** believe in:

- **Conventions over configuration** — patterns that make sense, not endless config files
- **Developer experience first** — fast feedback loops, intuitive APIs
- **Progressive enhancement** — start simple, add complexity only when needed
- **No magic** — clear, predictable behavior you can understand

## Learn More

- **NPM:** [create-thiz-app](https://www.npmjs.com/package/create-thiz-app)
- **THIZ.js Express:** [Documentation](https://github.com/santhosh-2504/thizjs-express)
- **Issues:** [Report bugs or request features](https://github.com/santhosh-2504/create-thiz-app/issues)

## Contributing

Contributions are welcome! Whether it's:
- Bug fixes
- New template features
- Documentation improvements
- Additional scaffolding options

Open an issue or submit a PR.

## Author

Created by **[Santhosh Kumar Anantha](https://github.com/santhosh-2504)**

Trying to make backend development less repetitive and more joyful.

## License

MIT — use it, break it, build with it.

---

**Stop configuring. Start building.**