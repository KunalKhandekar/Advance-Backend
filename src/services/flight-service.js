const { StatusCodes } = require("http-status-codes");
const { FlightRepository } = require("../repositories");
const AppError = require("../utils/errors/app-errors");

const flightRepository = new FlightRepository();

async function createFlight(data) {
  try {
    const airplane = await flightRepository.create(data);
    return airplane;
  } catch (error) {
    if (error.name == "SequelizeValidationError") {
      let explanation = [];
      error.errors.array.forEach((err) => {
        explanation.push(err.message);
      });
      throw new AppError(explanation, StatusCodes.BAD_REQUEST);
    }
    throw new AppError(
      "Cannot create a new Flight object",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createFlight,
};
