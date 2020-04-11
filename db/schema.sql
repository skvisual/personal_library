DROP DATABASE IF EXISTS library_db;
CREATE DATABASE library_db;

-- tells mysql that we are going to start interacting with library_db
USE library_db;

-- CREATES TABLE NAMED AUTHORS WITH 3 COLUMNS ID, FIRST NAME AND LAST NAME.
CREATE TABLE authors (
  id INT AUTO_INCREMENT PRIMARY KEY,
  firstName VARCHAR(30) NOT NULL,
  lastName VARCHAR(30) NOT NULL
);
-- CREATES TABLE NAMED BOOKS, WITH 4 COLUMNS, ID, TITLE, COVERPHOTO, AND AUTHORID. PRIMARY KEY IS SET TO ID, THIS DATA CANNOT BE CHANGED
CREATE TABLE books (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  coverPhoto VARCHAR(255),
  authorId INT NOT NULL,
  FOREIGN KEY (authorId) REFERENCES authors(id) ON DELETE CASCADE
  -- ON DELETE CASADE ADJUSTS THE ID NUMBERS IF ONE IS DELETED.
);
-- CREATES TABLE NOTES WITH 3 COLUMNS. ID, NOTE AND BOOK ID.
CREATE TABLE notes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  note VARCHAR(255) NOT NULL,
  bookId INT NOT NULL,
  FOREIGN KEY (bookId) REFERENCES books(id)
);


-- REFERENCES TEH AUTHORS TABLE, AND THE FIRST AND LAST NAME VALUES. INSERTS J.K... IN TO THE TABLE IN THEIR RESPECTIVE COLUMNS
INSERT INTO authors (firstName, lastName) VALUES ('J. K.', 'Rowling');
INSERT INTO authors (firstName, lastName) VALUES ('Mark', 'Twain');
INSERT INTO authors (fristName, lastName) VALUES ('Vince', 'Flynn');
INSERT INTO authors (firstName, lastName) VALUES ('John', 'Krakauer');
INSERT INTO authors (firstName, lastName) VALUES ('Dr.', 'Seuss');

INSERT INTO books (title, authorId, coverPhoto) VALUES ("Harry Potter and the Sorcerer\'s Stone", 1, 'https://m.media-amazon.com/images/I/41lnLrvBnML.jpg');

INSERT INTO books (title, authorId, coverPhoto) VALUES ('Harry Potter and the Chamber of Secrets', 1, 'https://m.media-amazon.com/images/I/51OZerWcGCL.jpg');

INSERT INTO books (title, authorId, coverPhoto) VALUES ('The Adventures of Tom Sawyer', 2, 'https://images-na.ssl-images-amazon.com/images/I/51dAqByd3UL.jpg')

INSERT INTO books (title, authorId, coverPhoto) VALUES ('Protect and Defend', 3, 'https://images-na.ssl-images-amazon.com/images/I/51sdyFKbgAL._SX309_BO1,204,203,200_.jpg');

INSERT INTO books (title, authorId, coverPhoto) VALUES ('Into Thin Air', 4, 'https://images-na.ssl-images-amazon.com/images/I/613xliMRGmL.jpg');

INSERT INTO books (title, authorId, coverPhoto) VALUES ('The Lorax', 5 'https://images-na.ssl-images-amazon.com/images/I/911iynWkSOL.jpg');

-- REFERENCES THE FIRST NAME, LAST NAME AND TITLE COLUMNS, JOINS THE AUTHORS AND BOOKS TABLE WHERE THE AUTHOR ID AND BOOK ID MATCH.
SELECT firstName, lastName, title 
FROM authors
INNER JOIN books
ON authors.id = books.authorId
