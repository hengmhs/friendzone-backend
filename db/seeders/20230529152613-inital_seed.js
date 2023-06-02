"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("nationalities", [
      {
        name: "Singapore Citizen",
      },
      {
        name: "Singapore PR",
      },
      {
        name: "Others",
      },
    ]);
    await queryInterface.bulkInsert("races", [
      {
        name: "Chinese",
      },
      {
        name: "Malay",
      },
      {
        name: "Eurasian",
      },
      {
        name: "Indian",
      },
      {
        name: "Others",
      },
    ]);
    await queryInterface.bulkInsert("marital_statuses", [
      {
        name: "Single",
      },
      {
        name: "Married",
      },
      {
        name: "Married with Kids",
      },
      {
        name: "Others",
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("nationalities", null, {});
    await queryInterface.bulkDelete("races", null, {});
    await queryInterface.bulkDelete("marital_statuses", null, {});
  },
};
