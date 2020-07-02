"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "rsvps",
      [
        {
          userId: 1,
          eventId: 1,
          attending: "yes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 1,
          eventId: 2,
          attending: "yes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          eventId: 1,
          attending: "yes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 5,
          eventId: 2,
          attending: "yes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 6,
          eventId: 2,
          attending: "yes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 7,
          eventId: 2,
          attending: "yes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 8,
          eventId: 2,
          attending: "yes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 9,
          eventId: 2,
          attending: "yes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 10,
          eventId: 2,
          attending: "yes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 11,
          eventId: 2,
          attending: "yes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 12,
          eventId: 2,
          attending: "yes",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("rsvps", null, {});
  },
};
