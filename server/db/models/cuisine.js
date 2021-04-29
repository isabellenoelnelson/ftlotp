const Sequelize = require("sequelize");
const db = require("../db");

const Cuisine = db.define("cuisine", {
	type: {
		type: Sequelize.STRING,
	},
});

module.exports = Cuisine;
