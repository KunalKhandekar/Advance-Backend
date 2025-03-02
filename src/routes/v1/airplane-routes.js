const express = require("express");
const { airplaneController } = require("../../controllers");
const airplaneRoutes = express.Router();

// POST -> /api/v1/airplanes
airplaneRoutes.post('/', airplaneController.createAirplane)

module.exports = airplaneRoutes;