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
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("rsvps", null, {});
  },
};
