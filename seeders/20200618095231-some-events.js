"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "events",
      [
        {
          title: "Basketball pickup games",
          startDateTime: "2020-06-24 14:00:00.000+00",
          endDateTime: "2020-06-24 17:00:00.000+00",
          location: "Museumplein, Amsterdam",
          sportType: "Basketball",
          public: true,
          outdoor: true,
          createdByUserId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Training",
          startDateTime: "2020-06-17 20:00:00.000+00",
          endDateTime: "2020-06-17 22:00:00.000+00",
          location: "Tiger Cage, Amsterdam",
          sportType: "Basketball",
          public: false,
          outdoor: false,
          teamId: 1,
          createdByUserId: 1,
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
