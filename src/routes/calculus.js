import express from "express";
import evaluate from "evaluator.js";

const getCalculusRoutes = () => {
  const router = express.Router();
  router.get("/calculus", calculate);

  return router;
};

const calculate = async (req, res, next) => {
  // the logic for calculating the results
  try {
    if (req.query.query === undefined) {
      throw new Error("please specify the input string");
    }
    const base64String = req.query.query;
    // convert into utf-8 string
    let bufferObj = Buffer.from(base64String, "base64");
    let decodedString = bufferObj.toString("utf-8");

    console.log(`To be calculated: ${decodedString}`);
    // logic to calculate the results
    let result = evaluate(decodedString);

    // logic to return the Http response
    res.status(200).json({ error: false, result: result });
  } catch (error) {
    // forward the error to error handler
    next(error);
  }
};

export default getCalculusRoutes;
