"use strict";
module.exports = (sequelize, DataTypes) => {
  const rsvp = sequelize.define(
    "rsvp",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      attending: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {}
  );
  rsvp.associate = function (models) {
    rsvp.hasMany(models.user);
    rsvp.hasMany(models.event);
  };
  return rsvp;
};
