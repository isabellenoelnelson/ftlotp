//this is the access point for all things database related!

const db = require("./db");

const User = require("./models/User");
const Cuisine = require("./models/cuisine");
const Restaurant = require("./models/restaurant");
const Review = require("./models/review");
const DiningExperience = require("./models/diningExperience");

//associations could go here!
User.hasMany(Review);
Review.belongsTo(User);
Restaurant.hasMany(Review);
Review.belongsTo(Restaurant);
Restaurant.belongsToMany(Cuisine, { through: "RestaurantCuisine" });
Cuisine.belongsToMany(Restaurant, { through: "RestaurantCuisine" });
Restaurant.belongsToMany(DiningExperience, {
	through: "RestaurantDiningExperience",
});
DiningExperience.belongsToMany(Restaurant, {
	through: "RestaurantDiningExperience",
});

module.exports = {
	db,
	models: {
		User,
		Cuisine,
		Restaurant,
		Review,
		DiningExperience,
	},
};
