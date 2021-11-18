const mongoCollections = require('../config/mongoCollections');
const books = mongoCollections.books;
const reviews = mongoCollections.reviews;
let { ObjectId } = require('mongodb');

let exportedMethods = {
  async getAllBooks() {
    const bookCollection = await books();
    const bookList = await bookCollection.find({}).toArray();
    if (!bookList) throw 'No book in system!';
    return bookList;
  },
  async getAllBooks2() {
    const bookCollection = await books();
    const bookList = await bookCollection.find({}, { projection: { title: 1 } }).toArray();
    if (!bookList) throw 'No book in system!';
    return bookList;
  },
  async getBookById(id) {

    if (!id) throw 'You must provide an id to search for';
    if(typeof id == "string" && id.trim() == ""){throw "String is empty"}
    let parsedId = ObjectId(id);
  const bookCollection = await books();
    const BookbyId = await bookCollection.findOne({ _id: parsedId});
    if (!BookbyId) throw 'No Book with that id';
    return BookbyId;
  },
  async addBook(title, author, genre, datePublished, summary) {

    if (!title || !author || !genre || !datePublished || !summary) throw "All fields need to have valid values";

    if(typeof title !== 'string' || typeof summary !== 'string' || title.trim() == "" || summary.trim() == "") throw "The provided should be valid string and cannot be empty"

    if (!genre || !Array.isArray(genre) || genre.length==0){ throw "You must provide an array of genre";}
    else {let result = genre.every(function (e) { if (typeof e !== 'string' || e.trim() == ""){ throw "Each element of array should be string and not empty" } }); }

    if(typeof author !== 'object') { throw "this is not object";  }
    else{
        if(author.hasOwnProperty('authorFirstName') == false || author.hasOwnProperty('authorLastName') == false ||  typeof author.authorFirstName !== 'string' ||  typeof author.authorLastName !== 'string' || (author.authorFirstName).trim() == "" || (author.authorLastName).trim() == "")  {throw "Provided input for author is not valid "}}

        var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
        if (!(date_regex.test(datePublished))) {throw "Invalid date"}


    const bookCollection = await books();
    let newbook = {
        title: title,
        author: author,
        genre: genre,
        datePublished: datePublished,
        summary: summary,
        reviews: []
        };

    const newInsertInformation = await bookCollection.insertOne(newbook);
    if (newInsertInformation.insertedCount === 0) throw 'Insert failed!';
    return await this.getBookById(newInsertInformation.insertedId);
  },
  async removeBook(id) {

    if (!id) throw 'You must provide an id to search for';
    const bookCollection = await books();
    const oBook = await this.getBookById(id)
    const oReviews = oBook.reviews
    for (i = 0; i < oReviews.length; i++) {
      var sts = await this.removeReview2(oReviews[i]);  }

    let parsedId = ObjectId(id);
    const deletionInfo = await bookCollection.removeOne({ _id: parsedId });
    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete book with id of ${id}`;
    }
    return {"bookId": id, "deleted": true};
  },
  async removeReview2(id) {
    const reviewCollection = await reviews();
    let review = null;
    let parsedId = ObjectId(id);
    const deletionInfo = await reviewCollection.removeOne({ _id: parsedId });
    return true
  },
  async updateBook(id, updatedBook) {
    const bookCollection = await books();

    const oldBook = await this.getBookById(id)
    const oldReviews = oldBook.reviews

    const updatedBookData = {};
    if (updatedBook.title) {
      if(typeof updatedBook.title !== 'string') throw "title is not string";
      updatedBookData.title = updatedBook.title; }

    if (updatedBook.author) {
      if(typeof updatedBook.author !== 'object') { throw "this is not object";  }
      updatedBookData.author = updatedBook.author; }

    if (updatedBook.summary) {
      if(typeof updatedBook.summary !== 'string') throw "Summary is not string";
      updatedBookData.summary = updatedBook.summary; }

    if (updatedBook.genre) { updatedBookData.genre = updatedBook.genre; }

    if (updatedBook.datePublished) { updatedBookData.datePublished = updatedBook.datePublished; }

    updatedBookData.reviews = oldReviews;
    let parsedId = ObjectId(id);
    await bookCollection.updateOne({ _id: parsedId }, { $set: updatedBookData });

    return await this.getBookById(id);
  },
  async addReviewToBook(BookId, reviewId) {
    let currentBook = await this.getBookById(BookId);
    var x = reviewId.toString();
 const bookCollection = await books();
  let parsedId = ObjectId(BookId);
    const updateInfo = await bookCollection.update(
      { _id: parsedId },
      {  $push: { reviews: x}  }
    );
    return await this.getBookById(BookId);
  },
  async removeReviewFromUser(bookId, reviewId) {
    let currentUser = await this.getBookById(bookId);
    var x = reviewId.toString();
    const bookCollection = await books();
    let parsedId = ObjectId(bookId);
    const updateInfo = await bookCollection.updateOne(
      { _id: parsedId },
      { $pull: { reviews: x}}
    );
    return await this.getBookById(bookId);
  }
};

module.exports = exportedMethods;