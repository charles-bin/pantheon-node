var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const games = [{"id":1,"title":"League of Legends","image":"https://upload.wikimedia.org/wikipedia/en/7/77/League_of_Legends_logo.png","description":"Whether you're playing Solo or Co-op with friends, League of Legends is a highly competitive, fast paced action-strategy game designed for those who crave a hard fought victory.","developer":"Riot Games","genre":"MOBA","published":"2009-10-27","rank":1},{"id":2,"title":"Hearthstone","image":"https://upload.wikimedia.org/wikipedia/en/8/8d/HearthStone_logo_2016.png","description":"Deceptively simple and insanely fun, Hearthstone is a fast-paced strategy card game from Blizzard Entertainment.","developer":"Blizzard Entertainment","genre":"Collectible card game","published":"2014-03-11","rank":2},{"id":4,"title":"Starcraft 2","image":"http://vignette1.wikia.nocookie.net/starcraft/images/c/c3/Legacy_of_the_Void_SC2_Logo2.png/revision/latest?cb=20150716223626","description":"Wage war across the galaxy with three unique and powerful races. StarCraft II is a real-time strategy game from Blizzard Entertainment for the PC and Mac.","developer":"Blizzard Entertainment","genre":"Real-time strategy","published":"2010-07-27","rank":3},{"id":3,"title":"Overwatch","image":"http://i.imgur.com/IF0dVuY.png","description":"Overwatch is a team-based multiplayer online first-person shooter video game developed and published by Blizzard Entertainment.","developer":"Blizzard Entertainment","genre":"First-person shooter","published":"2016-05-24","rank":4}];

router.get('/games', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  res.json(games);
});

module.exports = router;
