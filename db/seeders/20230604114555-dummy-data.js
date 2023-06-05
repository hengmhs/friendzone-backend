"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("events", [
      {
        name: "Friendzone Serangoon",
        start_time: "19:00",
        end_time: "21:00",
        date: "2023-10-12",
        venue: "Serangoon CC, Level 1",
        password: "friendzone",
        event_type: "Neighbourhood",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Fz Out Of Office: The Arts",
        start_time: "20:00",
        end_time: "22:00",
        date: "2023-08-23",
        venue: "Singapore Arts Museum, Level 3",
        password: "outofoffice",
        event_type: "Sector-Based",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("participants", [
      {
        name: "Mark Chan",
        postal_code: "550410",
        year: 1993,
        mobile: 98754321,
        is_first_time: true,
        is_male: true,
        nationality: "Singapore Citizen",
        race: "Chinese",
        marital_status: "Single",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Andrew Lee",
        postal_code: "168731",
        year: 1996,
        mobile: 99887766,
        is_first_time: false,
        is_male: true,
        nationality: "Singapore PR",
        race: "Chinese",
        marital_status: "Married",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "Nadia Banu",
        postal_code: "469695",
        year: 2000,
        mobile: 88776644,
        is_first_time: true,
        is_male: false,
        nationality: "Singapore Citizen",
        race: "Malay",
        marital_status: "Married",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("groups", [
      {
        event_id: 1,
        facilitator_id: 1,
        name: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        event_id: 1,
        facilitator_id: 2,
        name: "2",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        event_id: 2,
        facilitator_id: 2,
        name: "1",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        event_id: 2,
        facilitator_id: 2,
        name: "2",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
    await queryInterface.bulkInsert("events_groups_participants", [
      {
        event_id: 1,
        participant_id: 1,
        group_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        event_id: 1,
        participant_id: 2,
        group_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        event_id: 1,
        participant_id: 3,
        group_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        event_id: 2,
        participant_id: 3,
        group_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        event_id: 2,
        participant_id: 2,
        group_id: 1,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        event_id: 2,
        participant_id: 1,
        group_id: 2,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("events", null, {});
    await queryInterface.bulkDelete("participants", null, {});
    await queryInterface.bulkDelete("groups", null, {});
    await queryInterface.bulkDelete("events_groups_participants", null, {});
  },
};
