const { AirportService } = require("../services");
const { StatusCodes } = require("http-status-codes");

const { ErrorResponse, SuccessResponse } = require("../utils/common");

/**
 POST : /airports
 req-body : { name: 'xyz', code: 'XYZ', address: 'mumbai' } 
 **/
async function createAirport(req, res) {
  try {
    const { name, code, cityId } = req.body;
    const airport = await AirportService.createAirport({
      name,
      code,
      cityId,
    });
    SuccessResponse.message = "Successfully created an airport";
    SuccessResponse.data = airport;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "Something went wrong while creating airport";
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 GET : /airports
 req-body : {} 
 **/
async function getAirports(_, res) {
  try {
    const airports = await AirportService.getAirports();
    SuccessResponse.message = "Successfully Fetched all airports";
    SuccessResponse.data = airports;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message =
      "Something went wrong while fetching all the airports";
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 GET : /airports/:id
 req-body : {} 
 **/
async function getAirport(req, res) {
  try {
    const airport = await AirportService.getAirport(req.params?.id);
    SuccessResponse.message = "Successfully Fetched a airport";
    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "Something went wrong while fetching the airport";
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 DELETE : /airports/:id
 req-body : {} 
 **/
async function destoryAirport(req, res) {
  try {
    const airport = await AirportService.destoryAirport(req.params?.id);
    SuccessResponse.message = "Successfully Deleted the airport";
    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "Something went wrong while deleting the airport";
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 PATCH : /airports/:id
 req-body : { name: 'xyz', code: 'XYZ', address: 'mumbai' } 
 **/
async function updateAirport(req, res) {
  try {
    const { name, code, cityId } = req.body;
    const data = {};
    if (name) Object.assign(data, { name });
    if (code) Object.assign(data, { code });
    if (cityId) Object.assign(data, { cityId });

    const airport = await AirportService.updateAirport(req.params?.id, data);
    SuccessResponse.message = "Successfully updated the airport";
    SuccessResponse.data = airport;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "Something went wrong while updating the airport";
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createAirport,
  getAirports,
  getAirport,
  destoryAirport,
  updateAirport,
};
