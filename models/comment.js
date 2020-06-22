"use strict";
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define(
    "comment",
    {
      text: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      eventId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      teamId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {}
  );
  comment.associate = function (models) {
    // comment.belongsTo(models.user, {
    //   foreignKey: "userId",
    // });
    // comment.hasMany(models.team, {
    //   foreignKey: "teamId",
    // });
    // comment.hasMany(models.event, {
    //   foreignKey: "eventId",
    // });
  };
  return comment;
};
