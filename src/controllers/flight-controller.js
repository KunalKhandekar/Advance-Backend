const { FlightService } = require("../services");
const { StatusCodes } = require("http-status-codes");

const { ErrorResponse, SuccessResponse } = require("../utils/common");

/**
 POST : /airplanes
 req-body : {
 flightNumber: ,
 airplaneId: ,
 departureAirpotId,
 arrivalAirpotId,
 arrivalTime,
 departureTime,
 price,
 totalSeats,
 boardingGate }
 **/
async function createFlight(req, res) {
  try {
    const {
      flightNumber,
      airplaneId,
      departureAirpotId,
      arrivalAirpotId,
      arrivalTime,
      departureTime,
      price,
      totalSeats,
      boardingGate,
    } = req.body;

    const flight = await FlightService.createFlight({
      flightNumber,
      airplaneId,
      departureAirpotId,
      arrivalAirpotId,
      arrivalTime,
      departureTime,
      price,
      totalSeats,
      boardingGate,
    });
    SuccessResponse.message = "Successfully created an flight";
    SuccessResponse.data = flight;
    return res.status(StatusCodes.CREATED).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "Something went wrong while creating flight";
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

async function getAllFlights(req, res) {
  try {
    const flights = await FlightService.getAllFlights(req.query);
    SuccessResponse.message = "Successfully Fetched all flights";
    SuccessResponse.data = flights;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message =
      "Something went wrong while fetching all the flights";
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

/**
 GET : /flight/:id
 req-body : {} 
 **/
async function getFlight(req, res) {
  try {
    const flight = await FlightService.getFlight(req.params?.id);
    SuccessResponse.message = "Successfully Fetched a flight";
    SuccessResponse.data = flight;
    return res.status(StatusCodes.OK).json(SuccessResponse);
  } catch (error) {
    ErrorResponse.message = "Something went wrong while fetching the flight";
    ErrorResponse.error = error;
    return res.status(error.statusCode).json(ErrorResponse);
  }
}

module.exports = {
  createFlight,
  getAllFlights,
  getFlight,
};
