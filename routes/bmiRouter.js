"use strict";
const express = require("express");
const { calculateBMI } = require("../helper/bmi-calculator");
const bmiRouter = express.Router();
bmiRouter.use(express.json());

bmiRouter.route("/:id").get((req, res, next) => {
  res.statusCode = 403;
  res.end("GET operation not supported on /bmis/" + id);
});
bmiRouter
  .route("/")
  .get((req, res, next) => {
    res.statusCode = 403;
    res.end("GET operation not supported on /bmis");
  })
  .post((req, res, next) => {
    try {
      const data = req.body;
      const arrData = (data || []).map((el) => {
        return {
          ...el,
          BMICategory: calculateBMI(el.WeightKg, el.HeightCm),
        };
      });
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(arrData);
    } catch (err) {
      err = new Error("BMI post json error");
      err.status = 404;
      next(err);
    }
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end("PUT operation not supported on /bmi");
  })
  .delete((req, res, next) => {
    res.statusCode = 403;
    res.end("DELETE operation not supported on /bmis");
  });

module.exports = bmiRouter;
