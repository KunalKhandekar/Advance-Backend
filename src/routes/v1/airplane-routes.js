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

// GET -> /api/v1/airplanes
airplaneRoutes.get("/", airplaneController.getAirplanes);

// GET -> /api/v1/airplanes/:id
airplaneRoutes.get("/:id", airplaneController.getAirplane);

// DELETE -> /api/v1/airplanes/:id
airplaneRoutes.delete("/:id", airplaneController.destoryAirplane);

// PATCH -> /api/v1/airplanes/:id
airplaneRoutes.patch(
  "/:id",
  AirplaneMiddleware.validateUpdateRequest,
  airplaneController.updateAirplane
);

module.exports = airplaneRoutes;
