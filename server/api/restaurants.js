const router = require("express").Router();
const Restaurant = require("../db/models/restaurant");
const Cuisine = require("../db/models/cuisine");
const DiningExperience = require("../db/models/diningExperience");
module.exports = router;

router.get("/", async (req, res, next) => {
	try {
		const restaurants = await Restaurant.findAll({
			include: [{ model: Cuisine }, { model: DiningExperience }],
		});
		res.send(restaurants);
	} catch (error) {
		next(error);
	}
});

router.get("/:id", async (req, res, next) => {
	try {
		const restaurant = await Restaurant.findByPk(req.params.id);
		res.send(restaurant);
	} catch (error) {
		next(error);
	}
});
