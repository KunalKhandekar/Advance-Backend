const express = require("express");
const { flightController } = require("../../controllers");
const { FlightMiddleware } = require("../../middlewares");
const flightRoutes = express.Router();

// POST -> /api/v1/flights
flightRoutes.post(
  "/",
  FlightMiddleware.validateCreateRequest,
  flightController.createFlight
);


// GET -> /api/v1/flights?trips=MUM-BLR
flightRoutes.get("/",
  flightController.getAllFlights
)

module.exports = flightRoutes;
