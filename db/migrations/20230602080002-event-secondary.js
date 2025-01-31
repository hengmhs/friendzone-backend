"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("events", {
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
      start_time: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      end_time: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      venue: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      event_type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "friendzone",
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
    await queryInterface.createTable("groups", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      event_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "events",
          key: "id",
        },
        allowNull: false,
      },
      facilitator_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "facilitators",
          key: "id",
        },
        allowNull: false,
      },
      name: {
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
    await queryInterface.createTable("events_groups_participants", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      event_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "events",
          key: "id",
        },
        allowNull: false,
      },
      participant_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "participants",
          key: "id",
        },
        allowNull: false,
      },
      group_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "groups",
          key: "id",
        },
      },
      status_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "statuses",
          key: "id",
        },
        allowNull: false,
        defaultValue: 1,
      },
      is_attended: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      remarks: {
        type: Sequelize.STRING,
      },
      friends: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable("events_groups_participants");
    await queryInterface.dropTable("groups");
    await queryInterface.dropTable("events");
  },
};
