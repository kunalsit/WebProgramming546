const movies = require("./data/movies");
const connection = require("./config/mongoConnection");

async function main(){
  const firstMovie =await movies.create("Bill and Ted Face the Music","Once told they'd save the universe during a time-traveling adventure, 2 would-be rockers from San Dimas, California find themselves as middle-aged dads still trying to crank out a hit song and fulfill their destiny.","PG-13", "1hr 31min","Comedy",["Keanu Reeves","Alex Winter"],{director: "Dean Parisot", yearReleased: 2020});
  console.log(firstMovie);

  const secondMovie =await movies.create("Hidden Figures","The story of a team of female African-American mathematicians who served a vital role in NASA during the early years of the U.S. space program.","PG","2hr 7min","Drama",["Taraji P. Henson","Octavia Spencer", "Janelle Monáe"],{director: "Theodore Melfi", yearReleased: 2016});

  const allMovie =await movies.getAll()
  console.log(allMovie);

  const thirdMovie =await movies.create("The Dark Knight","When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.","R","2hr 32min","Action",["Christian Bale","Heath Ledger"],{director: "Christopher Nolan", yearReleased: 2008})
  console.log(thirdMovie);

  const renameMovie = await movies.rename(firstMovie._id, "Bill and Ted Face the Music Reloaded")
  console.log(renameMovie);

  await movies.remove(secondMovie._id);

  const allMovieAgain = await movies.getAll()
  console.log(allMovieAgain);

  const failMovie =await movies.create(1,"PG-13", "1hr 31min","Comedy",["Keanu Reeves","Alex Winter"],{director: "Dean Parisot", yearReleased: 2020});

  await movies.remove('5fydiidejdj');

  const failrenameMovie = await movies.rename('356cbchfkvv', "Bill and Ted Face the Music Reloaded");

  const failrenameMovie2 = await movies.rename(firstMovie._id, 420);

  const failGet = await movies.get('5f763a2245ec25b15cd3160z');

}

main();
