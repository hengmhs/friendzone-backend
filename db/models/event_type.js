"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Event_Type extends Model {
    static associate(models) {
      this.hasMany(models.event);
    }
  }
  Event_Type.init(
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
      modelName: "event_type",
      underscored: true,
      timestamps: false,
    }
  );
  return Event_Type;
};
