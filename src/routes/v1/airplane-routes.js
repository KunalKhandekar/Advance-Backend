const express = require("express");
const { airplaneController } = require("../../controllers");
const { AirplaneMiddleware } = require("../../middlewares");
const airplaneRoutes = express.Router();

// POST -> /api/v1/airplanes
airplaneRoutes.post(
  "/",
  AirplaneMiddleware.validateCreateRequest,
  airplaneController.createAirplane
);

module.exports = airplaneRoutes;
