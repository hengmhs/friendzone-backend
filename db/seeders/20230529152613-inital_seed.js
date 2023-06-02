"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("nationalities", [
      {
        type: "Singapore Citizen",
      },
      {
        type: "Singapore PR",
      },
      {
        type: "Others",
      },
    ]);
    await queryInterface.bulkInsert("races", [
      {
        type: "Chinese",
      },
      {
        type: "Malay",
      },
      {
        type: "Eurasian",
      },
      {
        type: "Indian",
      },
      {
        type: "Others",
      },
    ]);
    await queryInterface.bulkInsert("marital_statuses", [
      {
        type: "Single",
      },
      {
        type: "Married",
      },
      {
        type: "Others",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("nationalities", null, {});
    await queryInterface.bulkDelete("races", null, {});
    await queryInterface.bulkDelete("marital_statuses", null, {});
    await queryInterface.bulkDelete("neighbourhoods", null, {});
  },
};
