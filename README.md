# create-thiz-app

An opinionated MEN stack generator that gives you file-based routing and a zero-config developer experience. Build production-ready backends in seconds.

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
* **File-based routing** powered by **@thizjs/core** — no manual route configuration needed
* Express server with a clean folder structure
* MongoDB connection via Mongoose
* Graceful handling when `MONGO_URI` is missing
* Automatic port fallback (5000 → 5001 → 5002…)
* CORS configured
* HTTP request logging with Morgan
* **Hot reload** during development powered by **@thizjs/dev**
* Example model and route handlers
* `.env` preloaded with defaults

A simple template that avoids chaos and gets out of your way.

## Usage Example
```bash
npx create-thiz-app api-server
cd api-server
npm run dev
```

You'll immediately see:
* The server running with hot reload
* Helpful logs
* File-based routes automatically registered

## Folder Structure (CLI Project)

If you're exploring or contributing, the CLI repository looks like:
```
create-thiz-app/
├── index.js        # CLI logic
├── package.json    # CLI metadata
└── templates/      # MEN starter template copied to new projects
    ├── README.md
    ├── .env.example
    ├── package.json
    └── src/
```

## Contributing

Issues and pull requests are welcome. If you have ideas for improvements — TypeScript support, prompts, variants, or additional generators — feel free to open a discussion.

## Author

Created by **[Santhosh Kumar Anantha](https://github.com/santhosh-2504)**.

Just trying to make backend setup less repetitive.

## License

MIT — use it, modify it, improve it. The usual.