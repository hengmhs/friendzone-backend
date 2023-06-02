"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("nationalities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    });
    await queryInterface.createTable("races", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    });
    await queryInterface.createTable("marital_statuses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    });
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
        type: Sequelize.INTEGER,
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
      nationality_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      race_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      marital_status_id: {
        type: Sequelize.INTEGER,
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

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("nationalities");
    await queryInterface.dropTable("races");
    await queryInterface.dropTable("marital_statuses");
    await queryInterface.dropTable("participants");
  },
};
