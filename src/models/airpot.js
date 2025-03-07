"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Airpot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.City, {
        foreignKey: "cityId",
        onDelete: "cascade",
      });

      this.hasMany(models.Flight, {
        foreignKey: "departureAirpotId",
        onDelete: "cascade",
      });

      this.hasMany(models.Flight, {
        foreignKey: "arrivalAirpotId",
        onDelete: "cascade",
      });
    }
  }
  Airpot.init(
    {
      name: { type: DataTypes.STRING, allowNull: false, unique: true },
      code: { type: DataTypes.STRING, allowNull: false, unique: true },
      address: { type: DataTypes.STRING, unique: true },
      cityId: { type: DataTypes.STRING, allowNull: false },
    },
    {
      sequelize,
      modelName: "Airpot",
    }
  );
  return Airpot;
};
