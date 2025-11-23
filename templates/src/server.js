import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectMongoDB from "./db/mongo.js";

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 5000;

connectMongoDB();

function startServer(port) {
  const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

  server.on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.warn(`Port ${port} is already in use. Trying port ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error("Server error:", err);
      process.exit(1);
    }
  });
}

startServer(DEFAULT_PORT);