-- Copy from Google Sheet
-- replace all ' with ''
-- then do the find/replace below
-- (\d{1,3})\t(\d{4})\t(\d{1,2})\t(\d{1,2})\t([^\n]*$)
-- ($1, 2, $1, $2, $3, $4, '$5'),

INSERT INTO posts (question_id, account_id, dayOfYear, year, month, date, body) VALUES
(1, 2, 1, 2016, 0, 1, 'Setting aside time for something you might not have time for. Sacrificing for it because you want to.'),
(2, 2, 2, 2016, 0, 2, 'Be Younger! Deepen relationships with eachother and select others.'),
(3, 2, 3, 2016, 0, 3, 'Finding an apartment we can love and really enjoy cooking in'),
(4, 2, 4, 2016, 0, 4, 'Chloe and her sense of adventure, her fearlessness, her curiosity.'),
(5, 2, 5, 2016, 0, 5, 'Several times today. On the train, when I go thome from work, while cooking...'),
(6, 2, 6, 2016, 0, 6, 'Amy cut my hair and I cut hers (for the first time ever.)'),
(7, 2, 7, 2016, 0, 7, 'My own standards for myself.'),
(8, 2, 8, 2016, 0, 8, 'I am going to let go of being single. And I will start letting go of perfection.'),
(9, 2, 9, 2016, 0, 9, 'Flexitarian.'),
(10, 2, 10, 2016, 0, 10, 'having friends in New York that we can count on, trust, and have fun with.'),
(11, 2, 11, 2016, 0, 11, 'We made SUSHI! (In Jersey...) With Steven and Denise!!! It was lots of fun! Adventures in cooking.'),
(12, 2, 12, 2016, 0, 12, 'stopped drinking coffee (for any period of time).'),
(13, 2, 13, 2016, 0, 13, 'I don''t really know... there has to be someone out there we look up to (non-entertainment), but I guess not really. (Note to Amy''s response: They''re dating? Who is she? I don''t know them.)'),
(14, 2, 14, 2016, 0, 14, 'I flossed three times... ... :-)... :-/'),
(15, 2, 15, 2016, 0, 15, 'People.'),
(16, 2, 16, 2016, 0, 16, '"You''re pretty cool" "...I say that in a genuine way" (in text)'),
(17, 2, 17, 2016, 0, 17, '1) Having children, 2) Creating something, 3) Making friends, 4) travelling. I tried to wish for things that may not actually come true.'),
(18, 2, 18, 2016, 0, 18, 'clothes I bought you, because it makes me feel like I chose well.'),
(19, 2, 19, 2016, 0, 19, 'Wake up. The rest is optional.'),
(20, 2, 20, 2016, 0, 20, 'I have to be. I''ll be looking for jobs soon, though it looks like I might have some freelance prospects.'),
(21, 2, 21, 2016, 0, 21, 'No, I can''t (and don''t usually) remember my dreams.'),
(22, 2, 22, 2016, 0, 22, 'punch?'),
(23, 2, 23, 2016, 0, 23, 'As someone who helped others and knew how to have fun.'),
(24, 2, 24, 2016, 0, 24, 'Since I can''t say Two Wooden Spoons, a creative agency.'),
(25, 2, 25, 2016, 0, 25, 'Lazy Saturdays'),
(26, 2, 26, 2016, 0, 26, 'Amy, but I''m pretty confident in finding a well-paying job before summer. The only question is will I like the job. Who knows?'),
(27, 2, 27, 2016, 0, 27, 'A week 2 WDI student said to me whenever I talk to you I feel much better and calmer afterward.'),
(28, 2, 28, 2016, 0, 28, 'Can we stop with the celebrities? I don''t know... A great mixologist? But they may not want to be a teacher for a weekend.  Jesus.'),
(29, 2, 29, 2016, 0, 29, 'the way siblings are meant to be.'),
(30, 2, 30, 2016, 0, 30, 'The list is long and time is short. Italian. Sign language. Coding (which aspect). Piano. Singing. Songwriting. Parenting. Spousing. Loving.'),
(31, 2, 31, 2016, 0, 31, 'rewrite history/future.');
