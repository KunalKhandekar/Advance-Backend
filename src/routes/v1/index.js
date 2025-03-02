const express = require("express");

const v1Routes = express.Router();
const { infoController } = require("../../controllers");
const airplaneRoutes = require("./airplane-routes");
v1Routes.get("/info", infoController);
v1Routes.use("/airplanes", airplaneRoutes);

module.exports = {
  v1Routes,
};
