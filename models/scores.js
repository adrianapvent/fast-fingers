module.exports = function (sequelize, DataTypes) {
  var Scores = sequelize.define(
    "Scores",
    {
      // The player name can't be null
      player: {
        type: DataTypes.STRING,
        allowNull: false
      },
      score: {
        // the score must be a unique integer
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isNumeric: true,
          len: [1, 1000]
        }
      }
    },
    {
      freezeTableName: true //model table name will be the same as the model name
    }
  );

  return Scores;
};