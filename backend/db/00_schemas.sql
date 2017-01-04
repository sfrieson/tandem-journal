DROP TABLE IF EXISTS accounts CASCADE;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS questions;

CREATE TABLE accounts (
  id SERIAL PRIMARY KEY,
  name VARCHAR (30) UNIQUE
);
INSERT INTO accounts (name) VALUES ('Amy'), ('Steven');

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  question TEXT,
  date INTEGER,
  month INTEGER
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  account_id INTEGER REFERENCES accounts(id) ON DELETE CASCADE NOT NULL,
  question_id INTEGER,
  body TEXT,
  dayOfYear INTEGER,
  date INTEGER,
  month INTEGER,
  year INTEGER
);
