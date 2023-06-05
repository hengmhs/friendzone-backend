"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    static associate(models) {
      this.hasMany(models.eventsGroupsParticipants);
    }
  }
  Status.init(
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
      modelName: "status",
      underscored: true,
      timestamps: false,
    }
  );
  return Status;
};
