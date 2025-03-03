const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-errors");

const validateCreateRequest = (req, res, next) => {
  if (!req.body.modelNumber) {
    ErrorResponse.message = "Something went wrong while creating airplane";

    ErrorResponse.error = new AppError(
      ["Model Number not found in the oncoming request."],
      StatusCodes.BAD_REQUEST
    );

    console.log(ErrorResponse.error);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
};

module.exports = {
  validateCreateRequest,
};
