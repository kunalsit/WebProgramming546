const axios = require('axios');

async function getShows() {

const { data } = await axios.get('http://api.tvmaze.com/shows')
  return data 
}

function checkValue(num) {
  if (num < 0) throw "The input cannot be negative \nPlease enter a positive value";
  else if (num === undefined) throw "The input cannot be empty \nPlease enter a positive number";
}

async function getShowById(Id) {
  checkValue(Id);
  const data = await getShows();
  if (Id > data.length) throw "No such ID exists";
  for (d in data) {
    if (Number(data[d].id) === Number(Id)) return data[d];
  }
}

async function getShowByByName(name) {
  if (name === undefined || name === null) {
    throw "NO name provided";

  }
  const data = await getShows();
  let shows = [];
  //int i = 0
  let da = "";
  var i = 0;
  for (d in data) {
    da = `${data[d].name}`.toLowerCase();
    if(i<20){
    if (da.includes(name.toLowerCase())) {
      i = i+1;
      shows.push(data[d]);
    }}
  }
  return shows;
}

module.exports = {
  getShowById,
  getShowByByName
}