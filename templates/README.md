# THIZ.js Express Starter

A clean Express API starter with **file-based routing** and **convention-based middleware**. No configuration needed — just drop files and start building.

Created with [`create-thiz-app`](https://www.npmjs.com/package/create-thiz-app)

## What You Get

- 📁 **File-based routing** — structure your API with folders and files
- 🔌 **Convention-based middleware** — add `._global.js` for auto-apply
- 🔥 **Hot reload** — changes reflect instantly during development
- 📘 **TypeScript ready** — write `.ts` or `.js` route files
- 🗄️ **MongoDB ready** — optional, delete if you don't need it
- ⚡ **Zero config** — sensible defaults, works out of the box

## Quick Start

### 1. Install dependencies

If you used `create-thiz-app`, this is already done!
```bash
npm install
```

### 2. Set up environment (optional)

MongoDB is optional. If you want to use it:
```bash
cp .env.example .env
# Add your MONGO_URI
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
npm run dev   # Hot reload development server
npm start     # Production server
```

## Production Deployment

### Environment Variables

Set these in your hosting platform:

- `PORT` — Server port (optional, defaults to 5000)
- `MONGO_URI` — MongoDB connection string (if using MongoDB)

### Deploy Commands
```bash
npm install
npm start
```

**Platforms:** Works on Vercel, Railway, Render, Heroku, or any Node.js host.

## What's Included

### Dependencies

- **@thizjs/express** — File-based routing and middleware
- **express** — Web framework
- **mongoose** — MongoDB ODM (optional)
- **cors** — CORS middleware
- **morgan** — Request logging
- **dotenv** — Environment variables

### Dev Dependencies

- **@thizjs/dev** — Hot reload development server
- **tsx** — TypeScript execution
- **@types/express** — TypeScript definitions
- **@types/node** — TypeScript definitions

## Learn More

- **📚 Docs:** [THIZ.js Express](https://github.com/santhosh-2504/thizjs-express)
- **🐛 Issues:** [Report bugs](https://github.com/santhosh-2504/create-thiz-app/issues)

## Philosophy

THIZ.js believes in:
- **Conventions over configuration** — patterns, not config files
- **Developer experience** — fast, intuitive, joyful
- **Progressive enhancement** — start simple, add complexity as needed
- **No magic** — clear, understandable behavior

## Author

Created by **[Santhosh Kumar Anantha](https://github.com/santhosh-2504)**

## License

MIT — use it, break it, fix it, ship it.

---

**Start building your API. Stop configuring routers.**