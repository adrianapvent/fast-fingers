USE fastfingersGP2;

INSERT INTO words (difficulty, words)
VALUES ("easy","card"),("easy","mouse"),("easy","phone"),("medium","computer desk"),("medium", "leather chair"),("medium","plastic bottle"),("hard","Lorem ipsum dolor sit amet"),("hard","Modular tiny homes for sale");


/* pair key values as (Difficulty, word/phrase)

Less than 10 key strokes = easy
Between 10 & 20 key strokes = medium
Greater than 20 key strokes = hard

IE ("easy","card"),("medium","computer desk"),("hard", "Lorem ipsum dolor sit amet")
*/