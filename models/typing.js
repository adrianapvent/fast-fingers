module.exports = function (sequelize, DataTypes) {
  var Typing = sequelize.define(
    "Typing",
    { // Difficulty must be validated (can't be null)
      difficulty: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [["easy","medium","hard"]]
        }
      },
      words: {
        // words must be unique
        // code tbd
      },
      typingCounter: {
        // will count every character entered by user.
        //code tbd
      }
    },
    {
      // model table name === model name
      stopTable: true 
    }
  )
  return Typing;
};





// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Painting extends Model {}

// Painting.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     artist: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     exhibition_date: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//     filename: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     gallery_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'gallery',
//         key: 'id',
//       },
//     },
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'painting',
//   }
// );

// module.exports = Painting;
