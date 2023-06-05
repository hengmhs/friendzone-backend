"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("neighbourhoods", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
    await queryInterface.createTable("participants", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      postal_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      mobile: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      is_first_time: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      is_male: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      nationality: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      race: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      marital_status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("participants");
    await queryInterface.dropTable("neighbourhoods");
  },
};
