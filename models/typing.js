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
      // words must be unique
      words: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isAlpha: true,
          len: [1, 20]
        }
      },
      // will count every character entered by user.
      typingCounter: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    },
    {
    // model table name === model name
    stopTable: true 
    }
  );

  // sequelize hook
  Typing.beforeUpsert(
    // RegExp SQL / eslint disable next line no unused vars
    async function (typing, options) {
      let phraseLength = await typing.split(" ").filter(c => /\w/.test(c)).length;
      typing.keyCount = phraseLength;
    },
    {
      catch(error) {
        console.log(error);
      }
    }

  );

  return Typing;
};