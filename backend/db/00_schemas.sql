DROP TABLE IF EXISTS accounts CASCADE;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS questions;

CREATE TABLE accounts (
  id SERIAL PRIMARY KEY,
  name VARCHAR (30) UNIQUE
);
INSERT INTO accounts (name) VALUES ('Amy'), ('Steven');

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  account_id INTEGER REFERENCES accounts(id) ON DELETE CASCADE NOT NULL,
  prompt VARCHAR (1),
  body TEXT,
  date INTEGER,
  month INTEGER,
  year INTEGER
);


CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  question TEXT,
  date INTEGER,
  month INTEGER
);
