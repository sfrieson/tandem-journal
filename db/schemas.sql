DROP TABLE IF EXISTS accounts CASCADE;

CREATE TABLE accounts (
  id SERIAL PRIMARY KEY,
  name VARCHAR (30) UNIQUE
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  account_id INTEGER REFERENCES accounts(id) ON DELETE CASCADE NOT NULL,
  body TEXT,

  created_at BIGINT,
  updated_at BIGINT
);

-- CREATE TABLE questions (
--   id SERIAL PRIMARY KEY,
--   text TEXT
-- );
