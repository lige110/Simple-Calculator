import app from "./app.js";

const start = async () => {
  let port = 8080;
  app.listen(port);

  console.log(`server is started at http://localhost:${port}`);
};

start();
