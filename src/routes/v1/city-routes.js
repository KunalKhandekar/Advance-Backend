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

// GET -> /api/v1/cities
cityRoutes.get("/", cityController.getCities);

// DELETE -> /api/v1/cities
cityRoutes.delete("/:id", cityController.destoryCity);

// PATCH -> /api/v1/cities
// Using Same MiddleWare because same validation is required
cityRoutes.patch(
  "/:id",
  CityMiddleware.validateCreateRequest,
  cityController.updateCity
);

module.exports = cityRoutes;
