"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Marital_Status extends Model {
    static associate(models) {
      this.hasMany(models.participant, {
        foreignKey: "maritalStatusId",
      });
    }
  }
  Marital_Status.init(
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
      modelName: "maritalStatus",
      underscored: true,
      timestamps: false,
    }
  );
  return Marital_Status;
};
