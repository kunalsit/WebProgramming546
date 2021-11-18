const express = require('express');
const router = express.Router();
const data = require('../data');
const showsData = data.getshows;

router.get('/', async (req, res) => {
  try {
    res.render('display/form', { title: "Show Finder" });
  } catch (e) {
    res.sendStatus(500);
  }
});

router.post('/search', async (req, res) => {
  let showInfo = req.body;
  let newPerson;
  try {
    if (!showInfo || showInfo.name == '') {
       throw 'You must provide a search field';
             return;
    }
    newPerson = await showsData.getShowByByName(showInfo.name);
    if(newPerson.length === 0){
    res.render('display/nodata', { result: newPerson, searchParam: showInfo, title: "Show not Found" });}

    else{
    res.render('display/search', { result: newPerson, searchParam: showInfo, title: "Show Found" });}
  } catch (e) {
    res.render('display/error', { error: e });
  }
});

module.exports = router;