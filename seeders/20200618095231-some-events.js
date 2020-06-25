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
            "It's free for all and outdoor. We will see how many will show up and play full court. Bring water because it's hot out!",
          public: true,
          outdoor: true,
          userId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Cage fights",
          startDateTime: "2020-06-17T20:00",
          endDateTime: "2020-06-17T22:00",
          location: "Tiger Cage, Amsterdam",
          sportType: "Free fight",
          description:
            "We'll fight, just like in Fight Club, because everyone needs to sometime.",
          public: false,
          outdoor: false,
          teamId: 1,
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Soccer op het pleintje",
          startDateTime: "2020-06-17T20:00",
          endDateTime: "2020-06-17T22:00",
          location: "'t Pleintje",
          sportType: "Free fight",
          description:
            "Nostalgic street football, but with grown ups. Pana knock-out with billenbrand.",
          public: false,
          outdoor: false,
          teamId: 1,
          userId: 4,
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
