"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Facilitator extends Model {
    static associate(models) {
      this.hasMany(models.group);
    }
  }
  Facilitator.init(
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
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "facilitator",
      underscored: true,
    }
  );
  return Facilitator;
};
