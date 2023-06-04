"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Event_Group_Participant extends Model {
    static associate(models) {
      this.belongsTo(models.event);
      this.belongsTo(models.participant);
      this.belongsTo(models.status);
      this.belongsTo(models.group);
    }
  }
  Event_Group_Participant.init(
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
      participantId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "participant",
          key: "id",
        },
      },
      groupId: {
        type: DataTypes.INTEGER,
        references: {
          model: "group",
          key: "id",
        },
      },
      statusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "status",
          key: "id",
        },
        defaultValue: 0,
      },
      isAttended: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      remarks: {
        type: DataTypes.STRING,
      },
      friends: {
        type: DataTypes.STRING,
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
      modelName: "eventGroupParticipant",
      underscored: true,
    }
  );
  return Event_Group_Participant;
};
