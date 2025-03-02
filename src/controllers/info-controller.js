const { StatusCodes } = require("http-status-codes");

const info = (_, res) => {
  return res.status(StatusCodes.OK).json({
    success: true,
    message: "API is live",
    data: {},
    error: {},
  });
};

module.exports = info;
