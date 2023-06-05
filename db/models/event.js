"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      this.belongsToMany(models.participant, {
        through: "events_groups_participants",
      });
      this.hasMany(models.group);
      this.belongsTo(models.event_type);
    }
  }
  Event.init(
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
      },
      startTime: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      endTime: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      venue: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      eventTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        defaultValue: "friendzone",
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
      modelName: "event",
      underscored: true,
    }
  );
  return Event;
};
