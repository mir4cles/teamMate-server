"use strict";
module.exports = (sequelize, DataTypes) => {
  const teamMate = sequelize.define(
    "teamMate",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      teamId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  teamMate.associate = function (models) {
    teamMate.hasMany(models.user);
    teamMate.hasMany(models.team);
  };
  return teamMate;
};
