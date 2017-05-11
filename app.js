let Game = require('./Game');
let Team = require('./Team');
let League = require('./League');

let laLiga = new League('La Liga');

let Barca = new Team('Barca');
let RealMadrid = new Team('Real Madrid');
let Atletico = new Team('Atletico Madrid');

laLiga.addTeam(Barca);
laLiga.addTeam(RealMadrid);
laLiga.addTeam(Atletico);

laLiga.play(new Game(Barca, RealMadrid, 4, 0));
laLiga.play(new Game(RealMadrid, Atletico, 2, 0));
laLiga.play(new Game(Barca, Atletico, 1, 3));

console.log(laLiga.toString());
