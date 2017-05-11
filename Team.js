class Team {
	constructor (name) {
		this._name = name;
		this._goals = 0;
		this._games = 0;
	}

	get name () {
		return this._name;
	}

	get goals () {
		return this._goals;
	}

	addGoals (value) {
		this._goals += value;
	}

	get games () {
		return this._games;
	}

	played () {
		this._games++;
	}

	toString() {
		let goalsPerGame = this.goals / this.games;
		return `${this.name} ${this.goals} (${Math.round(goalsPerGame * 100) / 100} per game)`;
	}
}

module.exports = Team;
