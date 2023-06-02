"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Participant extends Model {
    static associate(models) {
      this.belongsTo(models.nationality);
      this.belongsTo(models.marital_status);
      this.belongsTo(models.race);
      this.belongsTo(models.neighbourhood);
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
      postal_code: {
        type: DataTypes.STRING,
        allowNull: false,
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
      is_first_time: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      is_male: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      nationality_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      race_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      marital_status_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
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
