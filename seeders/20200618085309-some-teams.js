"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "teams",
      [
        {
          teamName: "Tiger Kings",
          city: "Lutjebroek",
          description: "Cage fights ftw.",
          logoUrl:
            "https://miro.medium.com/max/1200/1*UmGJFKdEvaeI1cmQNjMBhg.png",
          createdByUserId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          teamName: "Super Spark",
          city: "Moddergat",
          description: "Keeping games lit since 2020.",
          logoUrl:
            "https://miro.medium.com/max/1200/1*UmGJFKdEvaeI1cmQNjMBhg.png",
          createdByUserId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("teams", null, {});
  },
};
