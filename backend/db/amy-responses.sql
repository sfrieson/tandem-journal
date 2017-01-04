-- Copy from Google Sheet
-- replace all ' with ''
-- then do the find/replace below
-- (\d{1,3})\t(\d{4})\t(\d{1,2})\t(\d{1,2})\t([^\n]*$)
-- ($1, 1, $1, $2, $3, $4, '$5'),

INSERT INTO posts (question_id, account_id, dayOfYear, year, month, date, body) VALUES
(1, 1, 1, 2016, 0, 1, 'being on the same team, always. Also letting the other person blow raspberries on you.'),
(2, 1, 2, 2016, 0, 2, 'Chose to be content. (Whatever the circumstances.)'),
(3, 1, 3, 2016, 0, 3, 'Continuing to establish the rhythms of our life together--relationally, habits, goals. Laying the foundation of our marriage.'),
(4, 1, 4, 2016, 0, 4, 'Molly Wizenberg, whose food blog, Orangette, led her to two cookbooks, two restaurants, and her family.'),
(5, 1, 5, 2016, 0, 5, 'Probably biting me on the foot earlier tonight.'),
(6, 1, 6, 2016, 0, 6, 'We spontaneously went out for dinner at Wheated.  yum!'),
(7, 1, 7, 2016, 0, 7, 'Laziness i.e. coasting or settling rather than spending time on or struggling towards the goals I have.'),
(8, 1, 8, 2016, 0, 8, 'My constant striving for control (/expectations).'),
(9, 1, 9, 2016, 0, 9, 'Supercalifragilisticexpialidocious!'),
(10, 1, 10, 2016, 0, 10, 'Seeing and identifying the ways God is working within us.'),
(11, 1, 11, 2016, 0, 11, '[Buttery salmon; bright and funky pickled radishes; crisp, fresh cucumber; pale green avocado slices; rice vinegared rice, sesame seeds, sriracha mayo.]'),
(12, 1, 12, 2016, 0, 12, 'ever ended up liking coconut.'),
(13, 1, 13, 2016, 0, 13, 'Umm... maybe Carey Mulligan and [his name is maybe Jim] Mumford because they might be normal? I don''t know that I necessarily want to double-date them...'),
(14, 1, 14, 2016, 0, 14, 'Have resumed morning yoga! Gotta remember that it makes my back happier.'),
(15, 1, 15, 2016, 0, 15, 'Delayed subways.'),
(16, 1, 16, 2016, 0, 16, 'When I was upset about zits, he grabbed my face away from the mirror and said, "Your face is beautiful." Almost, like, duh.'),
(17, 1, 17, 2016, 0, 17, '1. New apartment. 2. To find/pursue my "passion." 3. To travel with Steven'),
(18, 1, 18, 2016, 0, 18, 'that black t-shirt.'),
(19, 1, 19, 2016, 0, 19, 'Asking Steven if he wants me to make him coffee. (Also drinking my own, doing yoga, eating breakfast.)'),
(20, 1, 20, 2016, 0, 20, 'Not me!'),
(21, 1, 21, 2016, 0, 21, 'A few days ago, I dreamed we were getting married (again)'),
(22, 1, 22, 2016, 0, 22, 'mimosa!'),
(23, 1, 23, 2016, 0, 23, 'Kind. And loved by my family.'),
(24, 1, 24, 2016, 0, 24, 'Two Wooden Spoons.'),
(25, 1, 25, 2016, 0, 25, 'Raspberries and Farts.'),
(26, 1, 26, 2016, 0, 26, 'Me, because I''m the one working right now.'),
(27, 1, 27, 2016, 0, 27, 'Julia told me that I have a great sense of style (we were talking about interior design).'),
(28, 1, 28, 2016, 0, 28, 'I don''t want to invite anyone over for the weekend in this apartment.'),
(29, 1, 29, 2016, 0, 29, 'an extended sleepover.'),
(30, 1, 30, 2016, 0, 30, '....... too many things. Today I was thinking about writing, jewelry making, embroidery, interior design... I don''t know which to prioritize/pursue.'),
(31, 1, 31, 2016, 0, 31, 'The ability to speak every language.');
