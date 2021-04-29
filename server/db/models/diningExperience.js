const Sequelize = require("sequelize");
const db = require("../db");

const DiningExperience = db.define("diningExperience", {
	type: {
		type: Sequelize.TEXT,
	},
});

module.exports = DiningExperience;
