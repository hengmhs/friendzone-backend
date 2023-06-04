"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Participant extends Model {
    static associate(models) {
      this.belongsTo(models.nationality);
      this.belongsTo(models.marital_status);
      this.belongsTo(models.race);
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
      nationalityId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "nationality",
          key: "id",
        },
      },
      raceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "race",
          key: "id",
        },
      },
      maritalStatusId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "marital_status",
          key: "id",
        },
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
