import app from "./app.js";

const port = process.env.PORT || 8080;

const start = async () => {
  app.listen(port);

  console.log(`server is started at http://localhost:${port}`);
};

start();
