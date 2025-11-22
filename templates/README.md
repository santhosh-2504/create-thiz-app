# Created with `create-thiz-app`
An opinionated MEN stack generator featuring file-based routing, zero-config setup, and a fast dev server.

# MEN Stack Starter Template

A clean, minimal starter template for building backends with MongoDB, Express, and Node.js. Fast to set up, simple to understand, and won't yell at you if you forget a semicolon.

## Features

- **File-based routing** powered by **@thizjs/core** — no manual route configuration needed
- Express server with a neat folder structure
- MongoDB connection using Mongoose
- Graceful handling when `MONGO_URI` is missing (server won't explode)
- Automatic port fallback (5000 → 5001 → 5002…)
- CORS enabled by default
- Request logging with Morgan
- **Hot reload** during development powered by **@thizjs/dev**
- Example route handler and model to get you moving
- `.env` auto-loaded with sensible defaults

## Folder Structure
```
project/
├── .env
├── .env.example
├── .gitignore
├── package.json
└── src/
    ├── app.js
    ├── server.js
    ├── database/
    │   └── connection.js
    ├── models/
    │   └── sampleProduct.js
    └── routes/
        └── test
              └── GET.js
```     └── GET.js

Clean, simple, and just enough structure to prevent chaos.

## Getting Started

### 1. Install dependencies

If you used **create-thiz-app**, dependencies are already installed. If not:
```bash
npm install
```

### 2. Create your environment file

Copy the example file:
```bash
cp .env.example .env
```

Now update:
- `MONGO_URI` → your MongoDB connection string
- `PORT` → optional, defaults to 5000

### 3. Run the development server
```bash
npm run dev
```

**@thizjs/dev** provides hot reload by watching your source files during development.
(Changes to `.env` currently require a manual restart.)

## File-Based Routing

Routes are automatically registered using **@thizjs/core**. Just create your route files in the `src/routes/` directory and they'll be picked up automatically — no manual configuration needed.

## Example Route

The template includes a simple route so you can see something working right away:
```
GET /api/sample
```

If you see a JSON message, congratulations — everything is alive.

## Database

If `MONGO_URI` is missing or invalid, the server will still run and gently remind you to fix it. No dramatic crashes. No stack traces.

## Production

For production, use:
```bash
npm start
```

Assuming you've set real environment variables and not left `MONGO_URI` blank.

## Author

Created by **[Santhosh Kumar Anantha](https://github.com/santhosh-2504)**.

## License

MIT — use it, modify it, break it, fix it, teach it.

---

**Enjoy.**