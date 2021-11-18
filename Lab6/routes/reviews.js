const express = require('express');
const router = express.Router();
const data = require('../data');
const reviewData = data.reviews;
const bookData = data.books;

router.get('/:bookid/:id', async (req, res) => {
  try {
    const review = await reviewData.getReviewById(req.params.id);
    res.json(review);
  } catch (e) {
    res.status(404).json({ error: 'Review not found' });
  }
});

router.get('/', async (req, res) => {
  try {
    const reviewList = await reviewData.getAllReviews();
    res.json(reviewList);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});


router.post('/', async (req, res) => {
  const newReviewData = req.body;
  if (!newReviewData.title) { res.status(400).json({ error: 'You must provide review title' });
    return;  }
  if (!newReviewData.reviewer) {res.status(400).json({ error: 'You must provide reviewer' });
    return;  }
  if (!newReviewData.bookBeingReviewed) { res.status(400).json({ error: 'You must provide bookBeingReviewed' });
    return;  }
  if (!newReviewData.rating) { res.status(400).json({ error: 'You must provide rating' });
      return;  }
  if (!newReviewData.dateOfReview) { res.status(400).json({ error: 'You must provide dateOfReview' });
        return;  }
  if (!newReviewData.review) { res.status(400).json({ error: 'You must provide review' });
          return;  }

  try {
      await bookData.getBookById(newReviewData.bookBeingReviewed);
      } catch (e) {
      res.status(400).json({ error: 'Book not found' });
      return;  }
  try {
    const { title, reviewer, bookBeingReviewed, rating, dateOfReview ,review } = newReviewData;
    const newReview = await reviewData.addReview(title, reviewer, bookBeingReviewed, rating, dateOfReview ,review);
    res.json(newReview);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});


router.delete('/:bookid/:id', async (req, res) => {
  if (!req.params.id) {
    res.status(400).json({ error: 'You must Supply and ID to delete' });
    return;
  }
  try {
    await reviewData.getReviewById(req.params.id);
  } catch (e) {
    res.status(404).json({ error: 'Review not found' });
    return;
  }
  try {
    var status = await reviewData.removeReview(req.params.id);
    res.status(200).json(status);
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

module.exports = router;
