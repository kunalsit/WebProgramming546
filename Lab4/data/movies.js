const mongoCollections = require('../config/mongoCollections');
const movies = mongoCollections.movies;

let { ObjectId } = require('mongodb');


async function create(title, plot, rating, runtime, genre, cast, info){

try{
  if (!title || !plot || !rating || !runtime || !genre || !cast || !info) throw "All fields need to have valid values";

  if(typeof title !== 'string' || typeof plot !== 'string' || typeof rating !== 'string' || typeof runtime !== 'string' || typeof genre !== 'string'
      || title.trim() == "" || plot.trim() == "" || rating.trim() == "" || runtime.trim() == "" || genre.trim() == "") throw "The provided should be valid string and cannot be empty"

  if (!cast || !Array.isArray(cast) || cast.length==0){ throw "You must provide an array of cast";}
  else {

  let result = cast.every(function (e) {
            if (typeof e !== 'string' || e.trim() == ""){ throw "Each element of array should be string and not empty" } });
  }

  if(typeof info !== 'object') { throw "this is not object";  }
  else{
    if(info.hasOwnProperty('director') == false ||   typeof info.director !== 'string' || (info.director).trim() == "")  {throw "Provided input for director is not valid "}


     if(!Number.isInteger(info.yearReleased) || Math.ceil(Math.log10(info.yearReleased + 1)) != 4 || info.yearReleased < 1930 ||
        info.yearReleased > new Date().getFullYear() +5){
       throw "info yearReleased is not per validation"
     }
  }

const movieCollection = await movies();
let newMovie = {
  title: title,
  plot: plot,
  rating: rating,
  runtime: runtime,
  genre: genre,
  cast: cast,
  info: info
};

const insertInfo = await movieCollection.insertOne(newMovie);
if (insertInfo.insertedCount === 0) throw "Could not add Movie";

const newId = insertInfo.insertedId;

const Movie = await this.get(newId);
return Movie;

  }
  catch(error){console.log(error);}}



async function get(id) {

try{
    if (!id) throw 'You must provide an id to search for';


    if(typeof id == "string" && id.trim() == ""){throw "String is empty"}

    const movieCollection = await movies();
    const MoviebyId = await movieCollection.findOne({ _id: id });
    if (MoviebyId === null) throw 'No Movie with that id';
    return MoviebyId;
  }
  catch(error){console.log(error); }}


async function getAll() {
  try{
  const movieCollection = await movies();

  const movieList = await movieCollection.find({}).toArray();
  return movieList;
}catch(error){console.log(error);}}



async function rename(id, newTitle){

  try{
    if (!id) throw 'You must provide an id to search for';

    if (!newTitle || typeof newTitle !== 'string' || newTitle.trim() == "" ){  throw "invalid title"   }

   const Movie_re =await get(id)
   if (Movie_re !== null && Movie_re !== undefined) {
   const movieCollection = await movies();
    const updatedMovieTitle = {
      title: newTitle,
      plot: Movie_re.plot,
      rating: Movie_re.rating,
      runtime: Movie_re.runtime,
      genre: Movie_re.genre,
      cast: Movie_re.cast,
      info: Movie_re.info
    };


    const updatedAllInfo = await movieCollection.updateOne(
      { _id: id },
      { $set: updatedMovieTitle }
    );
    if (updatedAllInfo.modifiedCount === 0) {
      throw 'could not update movie successfully';
    }

    return await get(id);
  }
}catch(error){console.log(error);}}

async function  remove(id) {
try{
     if (!id) throw 'You must provide an id to search for';


    if(typeof id == "string" && id.trim() == ""){throw "String is empty"}


    const movieCollection = await movies();


    const deletionInfo = await movieCollection.deleteOne({ _id: id });

    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete movie with id of ${id}`;
    }
    return { deleted: true };
  }catch(error){console.log(error);}}

module.exports = {
    firstName: "Kunal",
    lastName: "Goyal",
    studentId: "10471054",
    create,
    get,
    rename,
    remove,
    getAll};
