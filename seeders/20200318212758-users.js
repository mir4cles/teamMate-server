"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Joe Exotic",
          email: "joe@gwzoo.com",
          password: bcrypt.hashSync("joe1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Carole Baskin",
          email: "carole@bigcatrescue.com",
          password: bcrypt.hashSync("carole1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Juri",
          email: "juri@juri.com",
          password: bcrypt.hashSync("juri1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Joya",
          email: "joya@joya.com",
          password: bcrypt.hashSync("joya1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Howard Baskin",
          email: "howard@howard.com",
          password: bcrypt.hashSync("howard1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Rick Kirkham",
          email: "rick@rick.com",
          password: bcrypt.hashSync("rick1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John Finlay",
          email: "johnfinlay@johnfinlay.com",
          password: bcrypt.hashSync("john1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Lauren Lowe",
          email: "lauren@lauren.com",
          password: bcrypt.hashSync("lauren1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Jeff Lowe",
          email: "jeff@jeff.com",
          password: bcrypt.hashSync("jeff1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bhagavan Antle",
          email: "bhagavan@bhagavan.com",
          password: bcrypt.hashSync("bhagavan1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "John Reinke",
          email: "johnreinke@johnreinke.com",
          password: bcrypt.hashSync("john1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Kelci Saffery",
          email: "kelci@kelci.com",
          password: bcrypt.hashSync("kelci1234", SALT_ROUNDS),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  },
};
