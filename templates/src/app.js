import express from "express";
import cors from "cors";
import morgan from "morgan";
import { registerRoutes } from '@thizjs/core'

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

await registerRoutes(app, 'routes', { prefix : ''})

export default app;
