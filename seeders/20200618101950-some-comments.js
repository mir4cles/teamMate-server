"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "comments",
      [
        {
          text:
            "Last time we didn't have enough balls. Who can bring one? Else we need to buy some.",
          userId: 1,
          eventId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Gatorade's on me!",
          userId: 2,
          eventId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: "Looking forward to hugging some tigers!",
          userId: 1,
          teamId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("comments", null, {});
  },
};
