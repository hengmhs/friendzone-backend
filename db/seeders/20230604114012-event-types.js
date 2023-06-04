"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("event_types", [
      {
        name: "Neighbourhood",
      },
      {
        name: "Open-To-All",
      },
      {
        name: "Sector-Based",
      },
      {
        name: "Others",
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("event_types", null, {});
  },
};
