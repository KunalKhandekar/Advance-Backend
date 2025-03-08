const { CityService } = require("../services");
const { StatusCodes } = require("http-status-codes");

const { ErrorResponse, SuccessResponse } = require("../utils/common");

/**
 POST : /cities
 req-body : { name: 'mumbai' } 
 **/
async function createCity(req, res) {
  try {
    const city = await CityService.createCity({
      name: req.body.name,
    });
    SuccessResponse.message = "Successfully created an city";
    SuccessResponse.data = city;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "Something went wrong while creating city";
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 DELETE : /cities
 req-body : {} 
 **/
async function destoryCity(req, res) {
  try {
    const city = await CityService.destoryCity(req.params?.id);
    SuccessResponse.message = "Successfully Deleted the city";
    SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "Something went wrong while deleting the city";
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 GET : /cities
 req-body : {} 
 **/
async function getCities(_, res) {
  try {
    const cities = await CityService.getCities();
    SuccessResponse.message = "Successfully Fetched all cities";
    SuccessResponse.data = cities;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message =
      "Something went wrong while fetching all the cities";
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 PATCH : /cities
 req-body : {name : "bombay"} 
 **/
async function updateCity(req, res) {
  try {
    const city = await CityService.updateCity(req.params?.id, {
      name: req.body.name,
    });
    SuccessResponse.message = "Successfully updated the city";
    SuccessResponse.data = city;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "Something went wrong while updating the city";
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createCity,
  destoryCity,
  updateCity,
  getCities,
};
