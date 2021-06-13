import express from "express";
import { getRoutes } from "./routes";

const app = express();

app.use("/", getRoutes());

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error("Page Not Found");
  err.status = 404;
  next(err);
});

// custom error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500);
  res.json({ error: true, message: err.message });
});

export default app;
