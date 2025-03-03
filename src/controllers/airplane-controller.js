const { error } = require("winston");
const { AirplaneSerivce } = require("../services");
const { StatusCodes } = require("http-status-codes");

const { ErrorResponse, SuccessResponse } = require("../utils/common");

/**
 POST : /airplanes
 req-body : { modelNumber: 'airbus230', capacity: 200 } 
 **/
async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneSerivce.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    SuccessResponse.message = "Successfully created an airplane";
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "Something went wrong while creating airplane";
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createAirplane,
};
