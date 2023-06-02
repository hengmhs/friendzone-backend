"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Neighbourhood extends Model {
    static associate(models) {
      this.hasMany(models.participant, {
        foreignKey: "postal_code",
      });
    }
  }
  Neighbourhood.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "neighbourhood",
      underscored: true,
      timestamps: false,
    }
  );
  return Neighbourhood;
};
