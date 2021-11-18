const express = require('express');
const router = express.Router();
const data = require('../data');
const showData = data.getshows;

router.get('/:id', async (req, res) => {
  try {
    let show = await showData.getShowById(req.params.id);
    res.render('display/shows', { show: show, title: "Shows found" });
  } catch (e) {
    res.status(404).json({ error: 'show not found' });
  }
});

module.exports = router;