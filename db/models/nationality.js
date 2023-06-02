"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Nationality extends Model {
    static associate(models) {
      this.hasMany(models.participant, {
        foreignKey: "nationalityId",
      });
    }
  }
  Nationality.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "nationality",
      underscored: true,
      timestamps: false,
    }
  );
  return Nationality;
};
