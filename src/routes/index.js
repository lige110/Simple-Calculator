import express from "express";

import { getCalculusRoutes } from "./calculus";

const getRoutes = () => {
  const router = express.Router();

  router.use("/", getCalculusRoutes());

  return router;
};

export { getRoutes };
