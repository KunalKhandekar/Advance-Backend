const CrudRepository = require("./crud-repository");
const { Airpot } = require("../models");

class AirportRepository extends CrudRepository {
  constructor() {
    super(Airpot);
  }
}

module.exports = AirportRepository;
