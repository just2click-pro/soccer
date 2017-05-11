class Game {
	constructor(homeTeam, awayTeam, homeTeamScore, awayTeamScore) {
		this._homeTeam = { name: homeTeam.name, goals: homeTeamScore };
		this._awayTeam = { name: awayTeam.name, goals: awayTeamScore };
	}

	get homeTeam () {
		return this._homeTeam;
	}

	get awayTeam () {
		return this._awayTeam;
	}

	toString() {
		return `${this._homeTeam.name} - ${this.awayTeam.name}: ${this.homeTeam.goals} - ${this.awayTeam.goals}`;
	}
}

module.exports = Game;
