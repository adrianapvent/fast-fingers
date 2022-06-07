"use strict";

var fs = require("fs");
var path = require("path");

const { Sequelize } = require("sequelize");

var filename = path.basename(module.filename);

var env = process.env.NODE_ENV || "development";
var config = require("../config/config.json")[env];

var db = {};

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
    var sequelize = new Sequelize(config.database, config.username, config.password, config);
}
  
fs
    .readdirSync(__dirname)
    .filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== filename) && (file.slice(-3) === ".js");
    })
    .forEach(function(file) {
        var table = sequelize.define(path.join(__dirname, file));
        db[table.name] = table;
    });

Object.keys(db).forEach(function(tableName) {
    if (db[tableName].associate) {
        db[tableName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;