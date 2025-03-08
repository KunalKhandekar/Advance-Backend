const express = require("express");

const v1Routes = express.Router();
const { infoController } = require("../../controllers");
const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require("./city-routes");
const airportRoutes = require("./airport-routes");

v1Routes.get("/info", infoController);
v1Routes.use("/airplanes", airplaneRoutes);
v1Routes.use("/cities", cityRoutes);
v1Routes.use("/airports", airportRoutes);

module.exports = {
  v1Routes,
};
