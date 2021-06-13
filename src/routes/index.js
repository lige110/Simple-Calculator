import express from "express";

import getCalculusRoutes from "./calculus.js";

const getRoutes = () => {
  const router = express.Router();

  router.use("/", getCalculusRoutes());

  return router;
};

export default getRoutes;
