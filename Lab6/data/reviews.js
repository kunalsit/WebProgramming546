const mongoCollections = require('../config/mongoCollections');
const reviews = mongoCollections.reviews;
const books = require('./books');
let { ObjectId } = require('mongodb');

const exportedMethods = {
  async getAllReviews() {
    const reviewCollection = await reviews();
    const reviewList = await reviewCollection.find({}).toArray();
    return reviewList;
  },
  async getReviewById(id) {

    const reviewCollection = await reviews();
    let parsedId = ObjectId(id);
    const review = await reviewCollection.findOne({ _id: parsedId });
    if (!review) throw 'Review not found';
    return review;
  },
  async addReview(title, reviewer, bookBeingReviewed, rating, dateOfReview, review) {
    if (!title || !reviewer || !bookBeingReviewed || !rating || !dateOfReview || !review ) throw "All fields need to have valid values";

    if(typeof title !== 'string' || typeof reviewer !== 'string' || title.trim() == "" || reviewer.trim() == ""   || typeof review !== 'string' || review.trim() == "") throw "The provided should be valid string and cannot be empty"
    if(typeof bookBeingReviewed!='string' || bookBeingReviewed.trim() == "") throw "bookBeingReviewed need to have valid values";

    if(!Number.isInteger(rating)) throw "Invalid Rating"
    if(rating<0 || rating>5) throw "rating must be between 1 and 5"

    var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
    if (!(date_regex.test(dateOfReview))) {throw "Invalid date"}

    const reviewCollection = await reviews();
    let newreview = {
      title: title,
      reviewer: reviewer,
      bookBeingReviewed: bookBeingReviewed,
      rating: rating,
      dateOfReview: dateOfReview,
      review: review
    };

    const insertInfo = await reviewCollection.insertOne(newreview);
    if (insertInfo.insertedCount === 0) throw "Could not add Book";
    const newId = insertInfo.insertedId;
    await books.addReviewToBook(bookBeingReviewed, newId);
    const Review = await this.getReviewById(newId);
    return Review;

  },
  async removeReview(id) {
    const reviewCollection = await reviews();
    let review = null;
    try {
      review = await this.getReviewById(id);
    } catch (e) {
      console.log(e);
      return;
    }
    let parsedId = ObjectId(id);
    const deletionInfo = await reviewCollection.removeOne({ _id: parsedId });
    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete review with id of ${id}`;
    }
    await books.removeReviewFromUser(review.bookBeingReviewed, id);
    return  {"reviewId": id, "deleted": true};;
  }

};

module.exports = exportedMethods;
