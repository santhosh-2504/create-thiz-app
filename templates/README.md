# THIZ.js Express Starter

A clean Express API starter with **file-based routing** and **convention-based middleware**. No configuration needed — just drop files and start building.

Created with [`create-thiz-app`](https://www.npmjs.com/package/create-thiz-app)

## What You Get

- **File-based routing** — structure your API with folders and files
- **Convention-based middleware** — add `._global.js` for auto-apply
- **Hot reload** — changes reflect instantly during development
- **Smart .env loading** — automatic environment variable management with hot-reload
- **Route inspector** — visual overview of all routes and middlewares
- **TypeScript ready** — write `.ts` or `.js` route files
- **MongoDB ready** — optional, delete if you don't need it
- **Zero config** — sensible defaults, works out of the box

## Quick Start

### 1. Install dependencies

If you used `create-thiz-app`, this is already done!
```bash
npm install
```

### 2. Set up environment

Create a `.env` file in your project root:
```bash
# .env
PORT=5000
NODE_ENV=development

# MongoDB (optional)
MONGO_URI=mongodb://localhost:27017/myapp

# Your app secrets
API_KEY=your_api_key_here
JWT_SECRET=your_jwt_secret
```

**Without MongoDB?** Just delete `src/db/` and `src/models/` — everything else works fine.

### 3. Start developing
```bash
npm run dev
```

Visit:
- **http://localhost:5000** → Welcome message
- **http://localhost:5000/health** → Health check

Changes to your code reload automatically!

## Project Structure
```
src/
├── routes/
│   ├── GET.js              → GET /
│   └── health/
│       └── GET.js          → GET /health
├── middlewares/
│   └── README.md           → Learn about middleware conventions
├── models/
│   └── sampleProduct.js    → Example Mongoose model
├── db/
│   └── mongo.js            → Optional MongoDB connector
├── app.js                  → Express app setup
└── server.js               → Server startup
```

Clean, simple, ready to extend.

## Route Inspector

Visualize your entire API structure with the built-in route inspector:
```bash
npm run routes
```

This launches a clean web interface at **http://localhost:3456** showing:

- **Route statistics** — total routes, HTTP methods breakdown
- **Middleware overview** — global and named middlewares
- **Route table** — complete list of endpoints with their middlewares and source files

**Example output:**
```
🔍 THIZ Route Inspector

Visual overview of your routes and middlewares

Total Routes: 3
Middlewares: 1
Global Middlewares: 1
GET Routes: 3
POST Routes: 0

🔧 Middlewares
Global Middlewares
- logger (Global)

Available Middlewares
- logger (Global)

Routes
Method | Path      | Middlewares | File
GET    | /         | logger      | src/routes/GET.ts
GET    | /health   | logger      | src/routes/health/GET.js
GET    | /users    | logger      | src/routes/users/GET.js
```

Perfect forDocumenting your API structurDebugging routing issueOnboarding new team memberUnderstanding middleware application

**Press Ctrl+C to stop the inspector**

## Environment Variables

THIZ.js automatically loads environment variables from `.env` files with **smart priority** and **hot-reload support**.

### Supported Files

Place these in your **project root**:

1. **`.env.local`** — Highest priority, for local overrides (gitignored)
2. **`.env.development`** — Development-specific variables
3. **`.env`** — Base environment variables (can be committed)

**Priority:** `.env.local` > `.env.development` > `.env`

### Auto-Loading

Environment variables are loaded automatically when you run `npm run dev`:
```bash
[THIZ-DEV] Loaded env from: .env.local, .env
[THIZ-DEV] Server will restart on .env file changes
```

Access them in your code:
```javascript
// Anywhere in your app
const port = process.env.PORT || 5000;
const apiKey = process.env.API_KEY;
```

### Hot-Reload on .env Changes

**Edit `.env` files while developing** — your server automatically restarts with the new values:
```bash
# Edit .env.local
PORT=3000  # Change from 5000 to 3000

# Console output:
[THIZ-DEV] .env.local changed - reloading env...
[THIZ-DEV] Restarting — env change: .env.local
[THIZ-DEV] Started server (pid: 12345)
Server running on port 3000  ← New value!
```

No manual restart needed!

### File Format
```bash
# Comments start with #
PORT=3000
DATABASE_URL=postgresql://localhost/mydb

# Quotes are optional but useful for values with spaces
APP_NAME="My Awesome App"

# You can use export syntax (it will be stripped)
export NODE_ENV=development

# Multiline values (use \n)
PRIVATE_KEY="-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKC..."
```

### Best Practices

1. **Commit `.env`** with safe defaults and documentation
2. **Gitignore `.env.local`** for machine-specific overrides:
```bash
   echo ".env.local" >> .gitignore
```
3. **Use `.env.development`** for dev-specific config that can be shared
4. **Never commit secrets** — use `.env.local` for API keys and passwords

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

## File-Based Routing

Create files in `src/routes/` and they're automatically registered:
```
src/routes/
├── product/
│   ├── GET.js              → GET /product
│   ├── POST.js             → POST /product
│   └── [id]/
│       ├── GET.js          → GET /product/:id
│       └── DELETE.js       → DELETE /product/:id
```

**Dynamic routes:** Use `[param]` folders for URL parameters.

**Example route handler:**
```javascript
// src/routes/product/[id]/GET.js
export default async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.json(product);
};
```

**That's it!** No manual registration needed.

## Convention-Based Middleware

Drop middleware files in `src/middlewares/` and use them:

### Global Middleware (Auto-applies)
```javascript
// src/middlewares/logger._global.js
export default (req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
};
```

**Runs on every request automatically!**

### Named Middleware (Per-route)
```javascript
// src/middlewares/checkAuth.js
export default (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};
```

**Use in routes:**
```javascript
// src/routes/admin/DELETE.js
export const middlewares = ['checkAuth'];

export default (req, res) => {
  res.json({ message: "Admin action" });
};
```

**Learn more:** See `src/middlewares/README.md`

## TypeScript Support

Write routes in TypeScript:
```bash
npm install -D tsx @types/express @types/node
```
```typescript
// src/routes/product/GET.ts
import { Request, Response } from 'express';

export default async (req: Request, res: Response) => {
  res.json({ message: "TypeScript route!" });
};
```

**Hot reload works with `.ts` files too!**

## MongoDB (Optional)

MongoDB is included but **completely optional**.

### Using MongoDB

1. Add `MONGO_URI` to `.env`
```bash
   MONGO_URI=mongodb://localhost:27017/myapp
```
2. Use the models in `src/models/`
3. Database connects automatically

### Not using MongoDB?

Delete these folders:
```bash
rm -rf src/db src/models
```

Everything else works without it!

## Scripts
```bash
npm run dev     # Hot reload development server
npm start       # Production server
npm run routes  # Launch route inspector
```

## Production Deployment

### Environment Variables

Set these in your hosting platform:

- `PORT` — Server port (optional, defaults to 5000)
- `NODE_ENV` — Environment (production, development, etc.)
- `MONGO_URI` — MongoDB connection string (if using MongoDB)
- Add your custom variables (API keys, secrets, etc.)

### Deploy Commands
```bash
npm install
npm start
```

**Platforms:** Works on Vercel, Railway, Render, Heroku, or any Node.js host.

**Note:** In production, create a `.env` file or set environment variables through your hosting platform's dashboard.

## What's Included

### Dependencies

- **@thizjs/express** — File-based routing and middleware
- **@thizjs/dev** — Development server with hot-reload and .env support
- **express** — Web framework
- **mongoose** — MongoDB ODM (optional)
- **cors** — CORS middleware
- **morgan** — Request logging
- **dotenv** — Environment variables
- **chalk** — Terminal colors
- **chokidar** — File watching

### Dev Dependencies

- **tsx** — TypeScript execution
- **@types/express** — TypeScript definitions
- **@types/node** — TypeScript definitions

## Learn More

- Docs:** [THIZ.js Express](https://github.com/santhosh-2504/thizjs-express)
- Issues:** [Report bugs](https://github.com/santhosh-2504/create-thiz-app/issues)

## Philosophy

THIZ.js believes in:
- **Conventions over configuration** — patterns, not config files
- **Developer experience** — fast, intuitive, joyful
- **Progressive enhancement** — start simple, add complexity as needed
- **No magic** — clear, understandable behavior

## Features Highlight

### File-Based Routing
No router configuration. Just create files and folders.

### Smart Middleware
Global middleware with `._global.js`, named middleware for routes.

### Environment Management
Multi-file .env support with hot-reload. Perfect for team development.

### Route Inspector
Visual web interface to explore your entire API structure, middlewares, and routing logic.

### Lightning Fast Dev
File changes reload instantly. .env changes restart automatically.

### TypeScript First
Full TypeScript support with zero configuration.

## Author

Created by **[Santhosh Kumar Anantha](https://github.com/santhosh-2504)**

## License

MIT — use it, break it, fix it, ship it.

---

**Start building your API. Stop configuring routers.**