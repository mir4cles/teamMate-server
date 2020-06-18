"use strict";
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define(
    "event",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      startDateTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endDateTime: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      sportType: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      public: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      outdoor: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      teamId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      createdByUserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maxPlayers: {
        type: DataTypes.INTEGER,
        defaultValue: 25,
        allowNull: false,
      },
    },
    {}
  );
  event.associate = function (models) {
    event.belongsTo(models.user);
    event.belongsTo(models.team);
    event.hasMany(models.rsvp);
    event.hasMany(models.comment);
  };
  return event;
};
