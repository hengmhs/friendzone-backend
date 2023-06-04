"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("facilitators", [
      {
        name: "Andre Lee",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Andrew Chan",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Helda",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Rachel Tang",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("facilitators", null, {});
  },
};
