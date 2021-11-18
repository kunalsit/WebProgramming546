const express = require('express');
const router = express.Router();

var axios=require('axios');

async function getShows(){
var {data} = await axios.get('http://api.tvmaze.com/shows');
return data;}

router.get('/:id', async (req, res) => {
  try {
    var inputid =req.params.id;
    
    function intValidator(userinput) {
      const regex = /^-?[0-9]+$/;

      return regex.test(userinput);
  }
    if (inputid<0)
    {
      res.status(404).json({ message: "Id is negative number" });
    }

    else if(!intValidator(inputid)){
      res.status(404).json({ message: "Input is not a valid number" });
    }
    else
    {    const show = await getshowById(req.params.id);
    res.json(show.data);}

  } catch (e) {
    res.status(404).json({ message: "show not found for given id" });
  }
});

router.get('/', async (req, res) => {
  try {
    let Shows=await getShows();
    res.json(Shows);
  } catch (e) {
    res.status(500).send();
  }
});


async function getshowById(id) {

var url ='http://api.tvmaze.com/shows/' +id;

  var data2 = await axios.get(url);
  return data2;
}

module.exports = router;