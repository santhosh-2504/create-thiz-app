# Middlewares

Add middleware files here to use in your routes.

## Examples

**Global middleware** (auto-applies to all routes):
```javascript
// src/middlewares/cors._global.js
export default (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
};
```

**Named middleware** (use per-route):
```javascript
// src/middlewares/checkAuth.js
export default (req, res, next) => {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
};

// src/routes/admin/GET.js
export const middlewares = ['checkAuth'];
export default (req, res) => {
  res.json({ message: "Admin area" });
};
```

📖 Learn more: https://github.com/santhosh-2504/thizjs-express#middleware-system