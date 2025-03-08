const express = require("express");
const { airportController } = require("../../controllers");
const { AirportMiddleware } = require("../../middlewares");
const airportRoutes = express.Router();

// POST -> /api/v1/airports
airportRoutes.post(
  "/",
  AirportMiddleware.validateCreateRequest,
  airportController.createAirport
);

// GET -> /api/v1/airports
airportRoutes.get("/", airportController.getAirports);

// GET -> /api/v1/airports/:id
airportRoutes.get("/:id", airportController.getAirport);

// DELETE -> /api/v1/airports/:id
airportRoutes.delete("/:id", airportController.destoryAirport);

// PATCH -> /api/v1/airports/:id
airportRoutes.patch(
  "/:id",
  AirportMiddleware.validateUpdateRequest,
  airportController.updateAirport
);

module.exports = airportRoutes;
