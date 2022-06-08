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
      }
    },
    {
      freezeTableName: true //model table name will be the same as the model name
    }
  );

  return Words;
}