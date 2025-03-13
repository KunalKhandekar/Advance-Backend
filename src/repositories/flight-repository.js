const CrudRepository = require("./crud-repository");
const { Flight, Airplane, Airpot, Sequelize } = require("../models");

class FlightRepository extends CrudRepository {
  constructor() {
    super(Flight);
  }

  async getAllFlights(filter, sort) {
    const response = await Flight.findAll({
      where: filter,
      order: sort,
      include: [
        {
          model: Airplane,
          required: true,
          as: 'airplaneDetails'
        },
        {
          model: Airpot,
          required: true,
          as: 'departureAirport',
          on: {
            col1: Sequelize.where(Sequelize.col("Flight.departureAirpotId"), "=", Sequelize.col("departureAirport.code"))
          }
        },
        {
          model: Airpot,
          required: true,
          as: 'arrivalAirport',
          on: {
            col1: Sequelize.where(Sequelize.col("Flight.arrivalAirpotId"), "=", Sequelize.col("arrivalAirport.code"))
          }
        }
      ]
    });
    return response;
  }
}

module.exports = FlightRepository;
