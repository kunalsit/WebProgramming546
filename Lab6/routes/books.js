const express = require('express');
const router = express.Router();
const data = require('../data');
const bookData = data.books;

router.get('/:id', async (req, res) => {
  try {
    let book = await bookData.getBookById(req.params.id);
    res.json(book);
  } catch (e) {
    res.status(404).json({ error: 'Book not found' });
  }
});

router.get('/', async (req, res) => {
  try {
    let bookList = await bookData.getAllBooks2();
    res.json(bookList);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  let bookInfo = req.body;
  if (!bookInfo) { res.status(400).json({ error: 'You must provide data to create a book' }); return; }

  if (!bookInfo.title) {res.status(400).json({ error: 'You must provide a title' });  return; }

  if (!bookInfo.author) {res.status(400).json({ error: 'You must provide author' });  return; }

  if (!bookInfo.datePublished) { res.status(400).json({ error: 'You must provide datePublished' });  return; }

  if (!bookInfo.genre) { res.status(400).json({ error: 'You must provide genre' });  return; }

  if (!bookInfo.summary) { res.status(400).json({ error: 'You must provide summary' }); return; }

  try {
    const newBook = await bookData.addBook(
      bookInfo.title, bookInfo.author, bookInfo.genre, bookInfo.datePublished, bookInfo.summary );
    res.status(200).json(newBook);
  } catch (e) { res.send(e); }
});

router.put('/:id', async (req, res) => {
  let bookInfo = req.body;

  if (!bookInfo) {
    res.status(400).json({ error: 'You must provide data to update a Book' });
    return;
  }
  if (!bookInfo.title) {res.status(400).json({ error: 'You must provide a title' });  return; }
  if (!bookInfo.author) {res.status(400).json({ error: 'You must provide author' });  return; }
  if (!bookInfo.datePublished) { res.status(400).json({ error: 'You must provide datePublished' });  return; }
  if (!bookInfo.genre) { res.status(400).json({ error: 'You must provide genre' });  return; }
  if (!bookInfo.summary) { res.status(400).json({ error: 'You must provide summary' }); return; }
  try {
    await bookData.getBookById(req.params.id);
  } catch (e) {
    res.status(404).json({ error: 'Book not found' });
    return;
  }
  try {
    const updatedBook = await bookData.updateBook(req.params.id, bookInfo);
    res.json(updatedBook);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.patch('/:id', async (req, res) => {
  const requestBody = req.body;
  let updatedObject = {};
  try {
    const oldPost = await bookData.getBookById(req.params.id);
    if (requestBody.title && requestBody.title !== oldPost.title)
      updatedObject.title = requestBody.title;
    if (requestBody.author && requestBody.author !== oldPost.author)
      updatedObject.author = requestBody.author;
    if (requestBody.datePublished && requestBody.datePublished !== oldPost.datePublished)
      updatedObject.datePublished = requestBody.datePublished;
    if (requestBody.genre && requestBody.genre !== oldPost.genre){
      var nwarr = oldPost.genre.concat(requestBody.genre)
      let uniqueChars = [...new Set(nwarr)];
      updatedObject.genre = uniqueChars;}
    if (requestBody.summary && requestBody.summary !== oldPost.summary)
        updatedObject.summary = requestBody.summary;
    if (requestBody.reviews && requestBody.reviews !== oldPost.reviews)
            updatedObject.reviews = requestBody.reviews;
  } catch (e) {
    res.status(404).json({ error: 'Book not found' });
    return;
  }
  if (Object.keys(updatedObject).length !== 0) {
    try {
      const updatedBook = await bookData.updateBook(
        req.params.id,
        updatedObject
      );
      res.json(updatedBook);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  } else {
    res
      .status(400)
      .json({
        error:
          'No fields have been changed from their inital values, so no update has occurred'
      });
  }
});

router.delete('/:id', async (req, res) => {
  if (!req.params.id) throw 'You must specify an ID to delete';
  try {
    await bookData.getBookById(req.params.id);
  } catch (e) {
    res.status(404).json({ error: 'Book not found' });
    return;
  }

  try {
    var status = await bookData.removeBook(req.params.id);
    res.status(200).json(status);
  } catch (e) {
    res.sendStatus(500);
  }
});

module.exports = router;
