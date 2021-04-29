const Sequelize = require("sequelize");
const db = require("../db");

const Restaurant = db.define("restaurant", {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	location: {
		type: Sequelize.TEXT,
	},
	placeId: {
		type: Sequelize.TEXT,
	},
	type: {
		type: Sequelize.ENUM("quick", "table"),
	},
	price: {
		type: Sequelize.ENUM("low", "medium", "high", "extra"),
	},
	description: {
		type: Sequelize.TEXT,
	},
});

module.exports = Restaurant;
