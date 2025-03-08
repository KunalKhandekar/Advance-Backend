const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-errors");

const validateCreateRequest = (req, res, next) => {
  if (!req.body.name) {
    ErrorResponse.error = new AppError(
      ["name not found in the oncoming request."],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.code) {
    ErrorResponse.error = new AppError(
      ["code not found in the oncoming request."],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  if (!req.body.cityId) {
    ErrorResponse.error = new AppError(
      ["cityId not found in the oncoming request."],
      StatusCodes.BAD_REQUEST
    );
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
};

const validateUpdateRequest = (req, res, next) => {
  if (!req.body.name && !req.body.code && !req.body.cityId) {
    ErrorResponse.error = new AppError(
      [
        "name, code and address not found in the oncoming request. Atleast one property is required for updating",
      ],
      StatusCodes.BAD_REQUEST
    );

    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }

  next();
};

module.exports = {
  validateCreateRequest,
  validateUpdateRequest,
};
