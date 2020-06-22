"use strict";
module.exports = (sequelize, DataTypes) => {
  const team = sequelize.define(
    "team",
    {
      teamName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      logoUrl: {
        type: DataTypes.STRING,
        defaultValue:
          "https://www.ajax.nl/upload_mm/f/b/0/69939_fullimage_65960_fullimage_65187_fullimage_default-team-logo-500.png",
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {}
  );
  team.associate = function (models) {
    // team.belongsToMany(models.user, {
    //   through: "teamMates",
    //   foreignKey: "userId",
    // });
    team.hasMany(models.event);
    // team.hasMany(models.comment);
  };
  return team;
};
