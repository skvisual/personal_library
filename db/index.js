// CONTAINS OUR CLASS WITH ALL OF OUR METHODS THAT WE WILL UTILIZE IN OUR APPLICATION.
// WE REQUIRE THE CONNECTION SO WE CAN MAKE A CONNECTION TO OUR DATABASE.

// THIS FILE IS CONSIDERED MODEL IN THE MVC BECAUSE IT HANDLES DATABASE REQUESTS.
const connection = require('./connection');


// CREATING A CLASS CALLED DB, THAT WILL HOLD OUR METHODS. 
class DB { 
  // USE A CONSTRUCTOR FUNCTION WITH OUR CONNECTION AS A PARAMETER WHICH REFERENCES THE CONNECTION.JS FILE.
  constructor(connection){
    // THIS CONSTRUCTOR FUNCTION HAS A PROPERTY BECAUSE WE ARE REFERENCING OUR PARAMETER 'CONNECTION'.
    this.connection = connection;
  }
  // DEFINES A METHOD, THAT WILL MAKE A QUERY TO OUR DB AND WILL RETURN ALL BOOKS IN THE BOOKS TABLE. 
  getAllBooks(firstName, lastName, title, coverPhoto, authors, books){
    const queryString = "SELECT * FROM ?? INNER JOIN ?? ON ? = ?";
    // returns a promise so that when it's called we can use .then() and .catch()
   return this.connection.query(queryString, [firstName, lastName, title, coverPhoto, authors, books])
  //  return this.connection.query('SELECT firstName, lastName, title, coverPhoto FROM authors INNER JOIN books ON authors.id = books.authorId')
 
   // THIS METHOD ALSO RETURNS THE RESPONSE FROM THE DATABASE.
  }

  // DEFINES A METHOD THAT WILL MAKE A QUERY TO OUR DB AND RETURNS ONE BOOK FROM THE BOOKS TABLE. USES A JOIN TO GRAB INFORMATION FROM THE AUTHORS AND BOOKS TABLE.
  getOneBook(bookTitle){
    return this.connection.query('SELECT books.id, firstName, lastName, title, coverPhoto FROM authors INNER JOIN books ON authors.id = books.authorId WHERE books.title=?', [bookTitle])
  }
  // DEFINES A METHOD THAT WILL MAKE A QUERY TO OUR DB AND RETURNS THE BOOK NOTES FROM THE NOTES TABLE. USES A JOIN TO RETURN INFORMATION FROM THE BOOKS AND NOTES TABLE.
  getBookNotes(bookTitle){
   return this.connection.query('SELECT notes.id, note FROM notes INNER JOIN books ON books.id = notes.bookId WHERE books.title=?', [bookTitle])
  }
  //  DEFINES A METHOD THAT ALLOWS A USER TO ADD A BOOK TO THE BOOK TABLE. 
  addBook(title, coverPhoto, authorId){
   return this.connection.query('INSERT INTO books SET ?', 
     {
       title,
       authorId,
       coverPhoto
     })
  }

  // DEFINES A METHOD THAT ALLOWS A USER TO ADD A BOOK NOTE TO THE NOTES TABLE.
  addBookNote(note, bookId){
    return this.connection.query('INSERT INTO notes SET ?', 
     {
       note,
       bookId
     })
  }
 // ALLOWS A USER TO DELETE A NOTE FROM THE NOTES TABLE.
  deleteNote(noteId){
   return this.connection.query('DELETE FROM notes WHERE id=?', 
     [noteId])
  }
}

// EXPORTS OUR DB CLASS WITH OUR CONNECTION AS A PARAMETER. BY EXPORTING DB WE ARE ALLOWING ACCESS TO 
module.exports = new DB(connection);