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