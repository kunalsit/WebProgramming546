const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', async (req, res) => {
  try {
  //  res.send('render/', { title: "Show Finder" });
  res.sendFile(path.join(__dirname+'/index.html'));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;