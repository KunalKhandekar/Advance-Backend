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

/**
 GET : /airplanes
 req-body : {} 
 **/
async function getAirplanes(_, res) {
  try {
    const airplanes = await AirplaneSerivce.getAirplanes();
    SuccessResponse.message = "Successfully Fetched all airplanes";
    SuccessResponse.data = airplanes;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message =
      "Something went wrong while fetching all the airplanes";
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 GET : /airplanes/:id
 req-body : {} 
 **/
async function getAirplane(req, res) {
  try {
    const airplane = await AirplaneSerivce.getAirplane(req.params?.id);
    SuccessResponse.message = "Successfully Fetched a airplane";
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "Something went wrong while fetching the airplane";
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function destoryAirplane(req, res) {
  try {
    const airplane = await AirplaneSerivce.destoryAirplane(req.params?.id);
    SuccessResponse.message = "Successfully Deleted the airplane";
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "Something went wrong while deleting the airplane";
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function updateAirplane(req, res) {
  try {
    const { modelNumber, capacity } = req.body;
    const data = {};
    if (modelNumber) Object.assign(data, { modelNumber });
    if (capacity) Object.assign(data, { capacity });

    const airplane = await AirplaneSerivce.updateAirplane(req.params?.id, data);
    SuccessResponse.message = "Successfully updated the airplane";
    SuccessResponse.data = airplane;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "Something went wrong while updating the airplane";
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createAirplane,
  getAirplanes,
  getAirplane,
  destoryAirplane,
  updateAirplane,
};
