import app from "./app";

const start = async () => {
  let port = 8080;
  app.listen(port);

  console.log(`server is started at http://localhost:${port}`);
};

start();
