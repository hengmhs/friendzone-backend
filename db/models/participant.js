"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Participant extends Model {
    static associate(models) {
      this.belongsTo(models.neighbourhood, { foreignKey: "postalCode" });
      this.belongsToMany(models.event, {
        through: "events_groups_participants",
      });
    }
  }
  Participant.init(
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
      postalCode: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
          model: "neighbourhood",
          key: "id",
        },
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      mobile: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      isFirstTime: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      isMale: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      nationality: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      race: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      maritalStatus: {
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
      modelName: "participant",
      underscored: true,
    }
  );
  return Participant;
};
