# create-thiz-app

A lightweight CLI tool to instantly bootstrap a clean MEN stack backend (MongoDB, Express, Node.js). Zero setup, zero stress — one command and your backend is ready to run.

## Why?

Because rewriting the same boilerplate for every new backend project gets old after the second time. This CLI gives you a fully functional MEN starter with sensible defaults, clean structure, and a great developer experience.

## Installation

Use it directly with NPX:
```bash
npx create-thiz-app my-backend
```

Or install globally:
```bash
npm install -g create-thiz-app
create-thiz-app my-backend
```

## What You Get

Running the command will:
* Create a new backend project folder
* Copy a production-ready MEN starter template
* Generate a `.env` file from `.env.example`
* Update the new project's `package.json` name
* Install all dependencies automatically
* Provide clear next steps

You can start coding immediately.

## Template Features

The included MEN starter provides:
* Express server with a clean folder structure
* MongoDB connection via Mongoose
* Graceful handling when `MONGO_URI` is missing
* Automatic port fallback (5000 → 5001 → 5002…)
* CORS configured
* HTTP request logging with Morgan
* Nodemon for development
* Example model, controller, and route
* `.env` preloaded with defaults

A simple template that avoids chaos and gets out of your way.

## Usage Example
```bash
npx create-thiz-app api-server
cd api-server
npm run dev
```

You'll immediately see:
* The server running
* Helpful logs
* Sample API route working at `/api/sample`

## Folder Structure (CLI Project)

If you're exploring or contributing, the CLI repository looks like:
```
create-thiz-app/
├── index.js        # CLI logic
├── package.json    # CLI metadata
└── templates/      # MEN starter template copied to new projects
    ├── README.md
    ├── .env.example
    ├── nodemon.json
    ├── package.json
    └── src/
```

## Contributing

Issues and pull requests are welcome. If you have ideas for v2 — TypeScript, prompts, variants, or generators — feel free to open a discussion.

## Author

Created by **[Santhosh Kumar Anantha](https://github.com/santhosh-2504)**.

Just trying to make backend setup less repetitive.

## License

MIT — use it, modify it, improve it. The usual.