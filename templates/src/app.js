import express from "express";
import cors from "cors";
import morgan from "morgan";
import sampleRoutes from "./routes/sample.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/sample", sampleRoutes);

export default app;
