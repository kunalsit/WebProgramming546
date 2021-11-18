const express = require('express');
const router = express.Router();
const about = {
	"name": "Kunal",
	"cwid": "10471054",
	"biography": "I am passionate about developing Javascript projects. I like to travel to new places. I am tech enthusiast and has so many gadgets (\n). I am from Agra the land of Taj Mahal, one of the 7 Wonders of the world. I did my bachelors in Computer Science", 
	"favoriteShows": ["The Office", "Cake Boss", "Roadies Revolution", "Friends", "Alchemist "]

}

router.get('/', (req, res) => {
    res.json(about);
});

module.exports = router;
