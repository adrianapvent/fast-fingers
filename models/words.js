
module.exports = function (sequelize, DataTypes) {
  var Words = sequelize.define(
    "Words",
    {
      // The difficulty cannot be null, and must be a validated
      difficulty: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [["easy", "medium", "hard"]]
        }
      },
      words: {
        // words cannot be null and must be unique
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isAlpha: true,
          len: [1, 20]
        }
      },
      // the letter count is suppose to count every character of words entered in the hook
      letterCount: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
      freezeTableName: true //model table name will be the same as the model name
    }
  );
  Words.beforeUpsert(
    // eslint-disable-next-line no-unused-vars
    async function (words, options) {
      let phraseLength = await words.split(" ").filter(c => /\w/.test(c))
        .length;
      words.letterCount = phraseLength;
    },
    {
      catch(error) {
        console.log(error);
      }
    }
  );

  return Words;
};


// -------------------------------------------------- //

// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/config.json');

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