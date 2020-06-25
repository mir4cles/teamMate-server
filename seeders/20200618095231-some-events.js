"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "events",
      [
        {
          title: "Basketball pickup games",
          startDateTime: "2020-06-24T14:00",
          endDateTime: "2020-06-24T17:00",
          location: "Museumplein, Amsterdam",
          sportType: "Basketball",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          public: true,
          outdoor: true,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Training",
          startDateTime: "2020-06-17T20:00",
          endDateTime: "2020-06-17T22:00",
          location: "Tiger Cage, Amsterdam",
          sportType: "Basketball",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          public: false,
          outdoor: false,
          teamId: 1,
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("events", null, {});
  },
};
