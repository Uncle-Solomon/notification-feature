import express, { Application, Request, Response } from "express";
import { connectDB } from "./models/db/connect";
import { router } from "./routes/notifications";
import { MONGO_URL } from "./config";

const app: Application = express();

const PORT = 8000;

app.use(express.json());
app.use("/", router);

connectDB(MONGO_URL ?? "");

app.listen(PORT, (): void => {
  console.log(`Server is up on http://localhost:${PORT}`);
});
