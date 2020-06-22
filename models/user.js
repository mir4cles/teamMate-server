"use strict";
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      avatarUrl: {
        type: DataTypes.STRING,
        defaultValue:
          "https://morgancarter.com.au/assets/images/blog/encouraging-upload/thumbnail.png",
        allowNull: false,
      },
    },
    {}
  );
  user.associate = function (models) {
    user.hasMany(models.event);
    // user.belongsToMany(models.event, {
    //   through: "rsvps",
    //   foreignKey: "userId",
    // });
    user.hasMany(models.team);
    user.belongsToMany(models.team, {
      through: "teamMates",
      foreignKey: "userId",
    });
    user.hasMany(models.comment);
  };
  return user;
};
