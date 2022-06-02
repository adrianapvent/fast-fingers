module.exports = function (sequelize, DataTypes) {
  var Score = sequelize.define(
    "Score",
    { // User can't be null
      player: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // final score must be a unique integer
      finalscore: {
        types: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true,
          len: [1, 500]
        }
      }
    },
    {
      // model table name === model name
      stopTable: true 
    }
  );

  return Score;
};






// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Gallery extends Model {}

// Gallery.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     starting_date: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//     ending_date: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'gallery',
//   }
// );

// module.exports = Gallery;
