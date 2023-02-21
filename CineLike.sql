-- Create user admin
CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin';

-- Create DataBase
CREATE DATABASE CineLike
  DEFAULT CHARACTER SET utf8
  DEFAULT COLLATE utf8_general_ci;
 
-- Use CineLike DataBase
USE CineLike;

-- Give privilieges to user
GRANT SELECT, INSERT, UPDATE, DELETE ON CineLike.* TO 'admin'@'localhost';

-- Create table users;
CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(20) NOT NULL UNIQUE,
    password VARCHAR(40) NOT NULL,
    ROLE VARCHAR(10) NOT NULL DEFAULT 'registered'
) ENGINE InnoDb;

-- Inserts to users table
INSERT INTO users VALUES (0, "user01", "pass01", "admin");
INSERT INTO users VALUES (0, "user02", "pass02", "admin");
INSERT INTO users VALUES (0, "user03", "pass03", "registered");

-- Create table films
CREATE TABLE films (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL UNIQUE,
    description VARCHAR(500) NOT NULL,
    language VARCHAR(20) NOT NULL,
    length VARCHAR(10) NOT NULL,
    publication int(4) NOT NULL
) ENGINE InnoDb;

-- Inserts to films table
INSERT INTO films VALUES (0, 
                         "La niña de la comunión",
                         "Una terrorífica película basada en una leyenda urbana. Hablamos con el director Víctor García."
                         "Español",
                         "2.0",
                         2022);

insert into films values (0, 
                         "The Shawshank Redemption", 
                         "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", 
                         "English",
                         "2.22", 
                         1994);

insert into films values (0, 
                         "The Godfather", 
                         "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                          "English", 
                          "2.57", 
                          1972);

insert into films values (0, 
                         "The Dark Knight", 
                         "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.", 
                         "English", 
                         "2.32", 
                         2008);

insert into films values (0, 
                         "Forrest Gump", 
                         "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.", 
                         "English", 
                         "2.22", 
                         1994);

insert into films values (0, 
                         "The Lord of the Rings: The Fellowship of the Ring", 
                         "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.", 
                         "English", 
                         "2.58", 
                         2001);

insert into films values (0, 
                         "Pulp Fiction", 
                         "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.", 
                         "English", 
                         "2.34", 
                         1994);

insert into films values (0, 
                         "The Matrix", 
                         "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", 
                         "English", 
                         "2.16", 
                         1999);

insert into films values (0, 
                         "Interstellar", 
                         "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", 
                         "English", 
                         "2.49", 
                         2014);

insert into films values (0, 
                         "The Silence of the Lambs", 
                         "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.", 
                         "English", 
                         "1.58", 
                         1991);



CREATE TABLE favorites (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  user_id INTEGER,
  film_id INTEGER
)ENGINE InnoDb;
