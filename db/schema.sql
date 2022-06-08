CREATE DATABASE fastfingersGP2;
USE fastfingersGP2;

DROP TABLE IF EXISTS words;
DROP TABLE IF EXISTS scores;

CREATE TABLE words (
  id int NOT NULL AUTO_INCREMENT,
  difficulty VARCHAR(15) NOT NULL,
  words VARCHAR(50) NOT NULL UNIQUE,
  letterCount INTEGER,
  PRIMARY KEY (id)
);

CREATE TABLE scores (
  id int NOT NULL AUTO_INCREMENT,
  player VARCHAR(50) NOT NULL,
  score INTEGER NOT NULL,
  PRIMARY KEY (id)
);