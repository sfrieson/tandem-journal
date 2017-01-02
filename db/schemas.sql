DROP TABLE IF EXISTS accounts CASCADE;
DROP TABLE IF EXISTS posts;

CREATE TABLE accounts (
  id SERIAL PRIMARY KEY,
  name VARCHAR (30) UNIQUE
);
INSERT INTO accounts (name) VALUES ('Amy') ;
INSERT INTO accounts (name) VALUES ('Steven') ;

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  account_id INTEGER REFERENCES accounts(id) ON DELETE CASCADE NOT NULL,
  body TEXT,

  created_at BIGINT,
  updated_at BIGINT
);
INSERT INTO posts (body, account_id, created_at) VALUES ('Today was the first day of a new year. We spent the day together; we ate bagels, bought a computer, and walked around our city in the sun. We''re not sure what this new year will bring, but we are praying that, above all else, we learn to love God more. We repotted new terrarium plants and I''m praying for new growth in our lives as well.', 1, 1483330379920);

INSERT INTO posts (body, account_id, created_at) VALUES ('Today we started the new year. It did feel like a beginning. I think it''s a good one. I''m excited; I''m scared. I''m ready to change. Again.', 2, 1483330814262);



-- CREATE TABLE questions (
--   id SERIAL PRIMARY KEY,
--   text TEXT
-- );
