"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    static associate(models) {
      this.hasMany(models.eventsGroupsParticipants);
      this.belongsTo(models.event);
      this.belongsTo(models.facilitator);
    }
  }
  Group.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "event",
          key: "id",
        },
      },
      facilitatorId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "facilitator",
          key: "id",
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
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
      modelName: "group",
      underscored: true,
    }
  );
  return Group;
};
