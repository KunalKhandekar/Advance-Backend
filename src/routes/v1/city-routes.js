const express = require("express");
const { cityController } = require("../../controllers");
const { CityMiddleware } = require("../../middlewares");
const cityRoutes = express.Router();

// POST -> /api/v1/cities
cityRoutes.post(
  "/",
  CityMiddleware.validateCreateRequest,
  cityController.createCity
);

module.exports = cityRoutes;
