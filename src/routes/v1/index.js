const express = require("express");

const v1Routes = express.Router();
const { infoController } = require("../../controllers");
const airplaneRoutes = require("./airplane-routes");
const cityRoutes = require("./city-routes");
v1Routes.get("/info", infoController);
v1Routes.use("/airplanes", airplaneRoutes);
v1Routes.use("/cities", cityRoutes);

module.exports = {
  v1Routes,
};
