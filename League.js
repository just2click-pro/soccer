class League {
	constructor(name) {
		this._name = name;
		this._teams = [];
		this._games = [];
	}

	addTeam (team) {
		this._teams.push(team);
	}

	play (game) {
		this._games.push(game);
		let homeTeam = this.getTeam(game.homeTeam.name);
		let awayTeam = this.getTeam(game.awayTeam.name);

		homeTeam.played();
		awayTeam.played();

		homeTeam.addGoals(game.homeTeam.goals);
		awayTeam.addGoals(game.awayTeam.goals);
	}

	get name () {
		return this._name;
	}

	getTeam(name) {
		return this._teams.find((team) => {
			return (team.name == name);
		});
	}

	toString () {
		let games = '',
			teams = '';

		for (let game of this._games) {
			games += game.toString() + '\n';
		}

		for (let team of this._teams) {
			teams += team.toString() + '\n';
		}

		return `League: ${this.name}\n\nGames:\n${games}\n\nTeam Stats:\n${teams}`;
	}
}

module.exports = League;
