const CrudRepository = require("./crud-repository");
const { Flight, Airplane, Airpot, Sequelize } = require("../models");
const db = require("../models");
const { addRowLockOnFlights } = require("./queries");

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
          as: "airplaneDetails",
        },
        {
          model: Airpot,
          required: true,
          as: "departureAirport",
          on: {
            col1: Sequelize.where(
              Sequelize.col("Flight.departureAirpotId"),
              "=",
              Sequelize.col("departureAirport.code")
            ),
          },
        },
        {
          model: Airpot,
          required: true,
          as: "arrivalAirport",
          on: {
            col1: Sequelize.where(
              Sequelize.col("Flight.arrivalAirpotId"),
              "=",
              Sequelize.col("arrivalAirport.code")
            ),
          },
        },
      ],
    });
    return response;
  }

  async updateRemainingSeats(flightId, seats, dec=1) {
    const transaction = await db.sequelize.transaction();
    try {
      await db.sequelize.query(addRowLockOnFlights(flightId));
      const flight = await Flight.findByPk(flightId);
      console.log(typeof dec);
      console.log(typeof +dec);
      if (+dec) {
        console.log("decrementing");
        await flight.decrement("totalSeats", { by: seats }, { transaction });
      } else {
        console.log("incrementing");
        await flight.increment("totalSeats", { by: seats }, { transaction });
      }

      await transaction.commit();
      return flight;
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
}

module.exports = FlightRepository;
