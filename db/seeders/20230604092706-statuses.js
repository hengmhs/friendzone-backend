"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("statuses", [
      {
        name: "Not Contacted",
      },
      {
        name: "Contacted",
      },
      {
        name: "To Reject",
      },
      {
        name: "Rejected",
      },
      {
        name: "Confirmed",
      },
      {
        name: "Not Coming",
      },
      {
        name: "Prompted",
      },
      {
        name: "Ghosted",
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("statuses", null, {});
  },
};
