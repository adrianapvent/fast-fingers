USE fastfingersGP2;

INSERT INTO words (difficulty, words)
VALUES ("easy","arcade"),("easy","atari"),("easy","retro"),("easy","nickel"),("easy","poloroid"),("easy","hairspray"),("easy","nintendo"),("easy","centipede"),("easy","defender"),("easy","frogger"),("easy","tetris"),("easy","start"),("easy","cartridge"),("easy","digdug"),("medium","Donkey Kong"),("medium","Ms. Pac-Man"),("medium","Space Invaders"),("medium","Punch-Out!!"),("medium","Street Fighter"),("medium","slice soda"),("medium","bagel bites"),("medium","neon lights"),("medium","pinball wizard"),("medium","hair scrunchies"),("medium","bomber jacket"),("medium","pepporoni pizza"),("medium","transformers"),("hard","Cool Ranch Doritos"),("hard","Cathode-Ray Tube television"),("hard","Nintendo Entertainment System"),("hard","Super Mario Brothers"),("hard","The Legend of Zelda"),("hard","Black Converse All-Stars"),("hard","Michael J. Fox in Back to The Future"),("hard","Billie Jean by Michael Jackson"),("hard","He-Man and the Masters of the Universe");


/* pair key values as (difficulty, word/phrase)

Easy - increased time for answering correctly by 5 seconds. Words are 9 letters or less.
Medium - increased time for answering correctly by 3 seconds. Words are 10 to 20 letters in length.
Hard - increased time for answering correctly by 2 seconds. Words are 20 letters or higher in length.

*/