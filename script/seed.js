"use strict";

const {
	db,
	models: { User, Cuisine, Restaurant, Review, DiningExperience },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
	await db.sync({ force: true }); // clears db and matches models to tables
	console.log("db synced!");

	// Creating Cuisine
	const african = await Cuisine.create({
		type: "African",
	});

	const american = await Cuisine.create({
		type: "American",
	});

	const asian = await Cuisine.create({
		type: "Asian",
	});

	const bakery = await Cuisine.create({
		type: "Bakery",
	});

	const british = await Cuisine.create({
		type: "British",
	});

	const cajun = await Cuisine.create({
		type: "Cajun/Creole",
	});

	const chinese = await Cuisine.create({
		type: "Chinese",
	});

	const cuban = await Cuisine.create({
		type: "Cuban",
	});

	const french = await Cuisine.create({
		type: "French",
	});

	const german = await Cuisine.create({
		type: "German",
	});

	const greek = await Cuisine.create({
		type: "Greek",
	});

	const indian = await Cuisine.create({
		type: "Indian",
	});

	const irish = await Cuisine.create({
		type: "Irish",
	});

	const italian = await Cuisine.create({
		type: "Italian",
	});

	const japanese = await Cuisine.create({
		type: "Japanese",
	});

	const latin = await Cuisine.create({
		type: "Latin",
	});

	const mediterranean = await Cuisine.create({
		type: "Mediterranean",
	});

	const mexican = await Cuisine.create({
		type: "Mexican",
	});

	const moroccan = await Cuisine.create({
		type: "Moroccan",
	});

	const norwegian = await Cuisine.create({
		type: "Norwegian",
	});

	const polynesian = await Cuisine.create({
		type: "Polynesian",
	});

	const seafood = await Cuisine.create({
		type: "Seafood",
	});

	const steakhouse = await Cuisine.create({
		type: "Steakhouse",
	});

	const sushi = await Cuisine.create({
		type: "Sushi",
	});

	const spanish = await Cuisine.create({
		type: "Spanish",
	});

	//Creating Dining Experiences
	const buffet = await DiningExperience.create({
		type: "Buffet",
	});

	const casual = await DiningExperience.create({
		type: "Casual Dining",
	});

	const character = await DiningExperience.create({
		type: "Character Dining",
	});

	const family = await DiningExperience.create({
		type: "Family Style",
	});

	const fine = await DiningExperience.create({
		type: "Fine/Signature Dining",
	});

	const themed = await DiningExperience.create({
		type: "Unique/Themed Dining",
	});

	const counter = await DiningExperience.create({
		type: "Counter Service",
	});

	const foodTruck = await DiningExperience.create({
		type: "Food Truck",
	});

	const fastCasual = await DiningExperience.create({
		type: "Fast Casual",
	});

	const lounge = await DiningExperience.create({
		type: "Lounge",
	});

	const poolBar = await DiningExperience.create({
		type: "Pool Bar",
	});

	const mobile = await DiningExperience.create({
		type: "Mobile Orders",
	});

	// Creating Restaurants
	const fourRivers = await Restaurant.create({
		name: "4 Rivers Cantina Barbacoa Food Truck",
		location: "Disney Springs",
		placeId: "ChIJefD43R1-3YgR6lYioLFNxoI",
		type: "quick",
		price: "low",
		description:
			"Tempt your taste buds with authentic Mexican-inspired innovative dishes, including the iconic Taco Cone and new beef barria dishes.",
	});

	await fourRivers.addCuisine(latin);
	await fourRivers.addCuisine(mexican);
	await fourRivers.addDiningExperience(casual);
	await fourRivers.addDiningExperience(foodTruck);

	const fiftiesPrimeTime = await Restaurant.create({
		name: "50's Prime Time Cafe",
		location: "Disney's Hollywood Studios",
		type: "table",
		price: "medium",
		description:
			"Classic American comfort food,’50s kitsch and a good old-fashioned family gathering take you back to a bygone era.",
		placeId: "ChIJMZbzcgJ_3YgRUBUY-3of3N8",
	});

	await fiftiesPrimeTime.addCuisine(american);
	await fiftiesPrimeTime.addDiningExperience(themed);

	const parkFare = await Restaurant.create({
		name: "1900 Park Fare",
		location: "Disney's Grand Floridian Resort & Spa",
		type: "table",
		price: "high",
		description:
			"Delight in breakfast and dinner buffets, plus a merry afternoon tea party, each hosted by Disney Characters.",
	});

	await parkFare.addCuisine(american);
	await parkFare.addDiningExperience(buffet);
	await parkFare.addDiningExperience(character);

	const abcComm = await Restaurant.create({
		name: "ABC Commissary",
		location: "Disney's Hollywood Studios",
		type: "quick",
		price: "low",
		description:
			"Lights… Cameras…. Eating! Feast on fare with international flair amid the Art Deco setting of this studio-inspired commissary.",
	});

	await abcComm.addCuisine(american);
	await abcComm.addDiningExperience(counter);
	await abcComm.addDiningExperience(mobile);

	const abracadaBar = await Restaurant.create({
		name: "AbracadaBar",
		location: "Disney's BoardWalk",
		type: "table",
		price: "low",
		description:
			"Pick a cocktail, any cocktail! Once a secret lounge of illusion, there’s magic in every concoction at this sophisticated social club.",
	});

	await abracadaBar.addCuisine(american);
	await abracadaBar.addDiningExperience(lounge);

	const akershusRoyalBanquetHall = await Restaurant.create({
		name: "Akershus Royal Banquet Hall",
		location: "Epcot",
		type: "table",
		price: "high",
		description:
			"Pick a cocktail, any cocktail! Once a secret lounge of illusion, there’s magic in every concoction at this sophisticated social club.",
	});

	await akershusRoyalBanquetHall.addCuisine(american);
	await akershusRoyalBanquetHall.addCuisine(norwegian);
	await akershusRoyalBanquetHall.addDiningExperience(buffet);
	await akershusRoyalBanquetHall.addDiningExperience(casual);
	await akershusRoyalBanquetHall.addDiningExperience(character);

	const aleAndCompassLounge = await Restaurant.create({
		name: "Ale and Compass Lounge",
		location: "Disney's Yacht Club Resort",
		type: "table",
		price: "low",
		description:
			"Stop by this nautical nook for lively libations and savory snacks. Choose from a variety of beers, wines and high-end liquors—as well as cocktails like the Spicy Pomegranate Margarita and the Captain’s Mai Tai.",
	});

	await aleAndCompassLounge.addCuisine(american);
	await aleAndCompassLounge.addDiningExperience(lounge);

	const aleAndCompassRestaurant = await Restaurant.create({
		name: "Ale and Compass Restaurant",
		location: "Disney's Yacht Club Resort",
		type: "table",
		price: "medium",
		description:
			"Dine on New England comfort food and classic seafood dishes in a coastal-inspired restaurant that’s reminiscent of a cozy lighthouse.",
	});

	await aleAndCompassRestaurant.addCuisine(american);
	await aleAndCompassRestaurant.addDiningExperience(casual);

	const alohaIsle = await Restaurant.create({
		name: "Aloha Isle",
		location: "Magic Kingdom",
		type: "quick",
		price: "low",
		description:
			"Dole out a smile with the much sought-after soft-serve delight known as DOLE Whip®—a popular frozen treat blended in pineapple, vanilla or swirled flavors. Frosty floats are also available.",
	});

	await alohaIsle.addCuisine(american);
	await alohaIsle.addDiningExperience(counter);
	await alohaIsle.addDiningExperience(mobile);

	const amorettes = await Restaurant.create({
		name: "Amorette's Patisserie",
		location: "Disney Springs",
		type: "quick",
		price: "low",
		description:
			"Saunter over to this artsy yet sophisticated pastry shop and set your eyes on an exquisite gallery of goodies—think éclairs, New York-style cheesecake, cookies, gluten-free macarons and signature cakes, which you can watch chefs decorate.",
	});

	await amorettes.addCuisine(bakery);
	await amorettes.addDiningExperience(counter);

	const anaheimProduce = await Restaurant.create({
		name: "Anaheim Produce",
		location: "Disney's Hollywood Studios",
		type: "quick",
		price: "low",
		description:
			"Grab hold of an on-the-go energy boost at this healthy cart featuring a fast and refreshing assortment of snacks and treats, including fresh fruit and veggies, Mickey pretzels with zesty cheese sauce, frozen lemonades, margaritas and more.",
	});

	await anaheimProduce.addCuisine(american);
	await anaheimProduce.addDiningExperience(counter);

	const anandapur = await Restaurant.create({
		name: "Anandapur Ice Cream Truck",
		location: "Disney's Animal Kingdom",
		type: "quick",
		price: "low",
		description:
			"As you cruise through Disney’s Animal Kingdom theme park, pull off from the pathway throughout the day and pick up a soft-serve waffle cone or a frosty float with your choice of fountain beverage—as prepped by the Anandapur Ice Cream Truck!",
	});

	await anandapur.addCuisine(american);
	await anandapur.addDiningExperience(counter);

	const arcticExpeditions = await Restaurant.create({
		name: "Arctic Expeditions",
		location: "Disney's Blizzard Beach Water Park",
		type: "quick",
		price: "low",
		description:
			"Keep on trekking ‘til you see this snowmobile bar near the Chairlift—then, sip on a variety of refreshing beverages like our Piña Colada, Black Cherry Lemonade, Craft Beer and more!",
	});

	await arcticExpeditions.addCuisine(american);
	await arcticExpeditions.addDiningExperience(counter);

	const aristocrepes = await Restaurant.create({
		name: "AristoCrêpes",
		location: "Disney Springs",
		type: "quick",
		price: "low",
		description:
			"Make a pit stop at this swoon-worthy hotspot—open at select times daily—for sweet crêpes like our s’mores. Be sure to wash it all down with a delicious beverage too!",
	});

	await aristocrepes.addCuisine(american);
	await aristocrepes.addDiningExperience(counter);

	const artistsPalette = await Restaurant.create({
		name: "The Artist's Palette",
		location: "Disney's Saratoga Springs Resort & Spa",
		type: "quick",
		price: "low",
		description:
			"Paint a pleasing lunch or dinner with gourmet sandwiches, salads and grab ’n’ go items—or start your day with a picture-perfect hot breakfast.",
	});

	await artistsPalette.addCuisine(american);
	await artistsPalette.addDiningExperience(counter);
	await artistsPalette.addDiningExperience(fastCasual);
	await artistsPalette.addDiningExperience(mobile);

	const auntieGravitys = await Restaurant.create({
		name: "Auntie Gravity's Galactic Goodies",
		location: "Magic Kingdom",
		type: "quick",
		price: "low",
		description:
			"Come back down to Earth for a sweet treat: soft-serve ice cream, sundaes, floats made with soda, smoothies and fountain soft drinks.",
	});

	await auntieGravitys.addCuisine(american);
	await auntieGravitys.addDiningExperience(counter);

	const avalunch = await Restaurant.create({
		name: "Avalunch",
		location: "Disney's Blizzard Beach Water Park",
		type: "quick",
		price: "low",
		description:
			"Don’t let your hunger slide. Get a grip with specialty hot dogs, nachos, draft beer and soft drinks.",
	});

	await avalunch.addCuisine(american);
	await avalunch.addDiningExperience(counter);
	await avalunch.addDiningExperience(mobile);

	const backlotExpress = await Restaurant.create({
		name: "Backlot Express",
		location: "Disney's Hollywood Studios",
		type: "quick",
		price: "low",
		description:
			"Get your grub on with savory and flavorful dishes like the Backlot Burger or Cuban Sandwich! Desserts, beer and soft drinks are also available.",
	});

	await backlotExpress.addCuisine(american);
	await backlotExpress.addDiningExperience(counter);
	await backlotExpress.addDiningExperience(mobile);

	const backstretch = await Restaurant.create({
		name: "Backstretch Pool Bar",
		location: "Disney's Saratoga Springs Resort & Spa",
		type: "quick",
		price: "low",
		description:
			"Round the home stretch with a refreshing non-alcoholic drink in hand, or choose from a winning selection of beers and cocktails. Make your victory lap even sweeter with a selection of poolside snacks including ice cream, pretzels and pizzas.",
	});

	await backstretch.addCuisine(american);
	await backstretch.addDiningExperience(poolBar);
	await backstretch.addDiningExperience(counter);

	const bananaCabana = await Restaurant.create({
		name: "Banana Cabana",
		location: "Disney's Caribbean Beach Resort",
		type: "table",
		price: "low",
		description:
			"Cool off with a refreshing libation at this walk-up bar that offers tropical concoctions like the Caribbean Smuggler, Guava-Rita, Bourbon Breeze and our signature Banana Cabana—plus cold beer, sangria and nonalcoholic options. Hungry for some quick, tasty bites? Dine-in and enjoy our zesty jerk chicken wings, chile con queso, loaded potato fries and more.",
	});

	await bananaCabana.addCuisine(american);
	await bananaCabana.addDiningExperience(lounge);
	await bananaCabana.addDiningExperience(poolBar);

	const barcelonaLounge = await Restaurant.create({
		name: "Barcelona Lounge",
		location: "Disney's Coronado Springs Resort",
		type: "table",
		price: "low",
		description:
			"Savor espresso drinks, pastries and light fare for breakfast at this lounge inspired by Spain’s coffee culture.",
	});

	await barcelonaLounge.addCuisine(american);
	await barcelonaLounge.addDiningExperience(counter);
	await barcelonaLounge.addDiningExperience(lounge);

	const barefootPoolBar = await Restaurant.create({
		name: "Barefoot Pool Bar",
		location: "Disney's Polynesian Village Resort",
		type: "quick",
		price: "low",
		description:
			"Kick off your shoes and enjoy the white sandy beach as you sip on Tiki drinks and take in views of Magic Kingdom park. Try an amazing cocktail, refreshing beer, delicious wine or a smoothie!",
	});

	await barefootPoolBar.addCuisine(american);
	await barefootPoolBar.addDiningExperience(counter);
	await barefootPoolBar.addDiningExperience(poolBar);

	const barRiva = await Restaurant.create({
		name: "Bar Riva",
		location: "Disney's Riveria Resort",
		type: "table",
		price: "medium",
		description:
			"Enjoy the view at this open-air pool bar while sipping on frozen cocktails, Provence rosé or a refreshing spritzer. When hunger strikes, chef-crafted sandwiches and fresh salads are available.",
	});

	await barRiva.addCuisine(american);
	await barRiva.addDiningExperience(poolBar);

	const baselineTapHouse = await Restaurant.create({
		name: "Baseline Tap House",
		location: "Disney's Hollywood Studios",
		type: "table",
		price: "low",
		description:
			"Venture down to this cheery corner pub specializing in California brews and wine.",
	});

	await baselineTapHouse.addCuisine(american);
	await baselineTapHouse.addDiningExperience(lounge);

	const basket = await Restaurant.create({
		name: "The Basket at Wine Bar George",
		location: "Disney Springs",
		type: "quick",
		price: "low",
		description:
			"Pick up the perfect picnic-ready provisions at this convenient grab-and-go counter.",
	});

	await basket.addCuisine(american);
	await basket.addDiningExperience(counter);

	const bbWolfs = await Restaurant.create({
		name: "B.B. Wolf's Sausage Co.",
		location: "Disney Springs",
		type: "quick",
		price: "low",
		description:
			"Huff, puff and blow your hunger away at this gourmet kiosk serving up artisan sausages—each with a clever array of toppings. Pair your favorite with a fountain soft drink or draft beer.",
	});

	await bbWolfs.addCuisine(american);
	await bbWolfs.addDiningExperience(counter);

	const beachClubMarketplace = await Restaurant.create({
		name: "Beach Club Marketplace",
		location: "Disney's Beach Club Resort",
		type: "quick",
		price: "low",
		description:
			"Start your day with a breakfast sandwich or Mickey waffles. Then fuel up on lunch and dinner with a selection of macaroni and cheese dishes, hot or cold sandwiches, or refreshing salads.",
	});

	await beachClubMarketplace.addCuisine(american);
	await beachClubMarketplace.addDiningExperience(counter);
	await beachClubMarketplace.addDiningExperience(mobile);

	const beachesAndCream = await Restaurant.create({
		name: "Beaches & Cream Soda Shop",
		location: "Disney's Beach Club Resort",
		type: "table",
		price: "medium",
		description:
			"Bring your sweet tooth to this boardwalk-style ice cream parlor where every day is sundae.",
	});

	await beachesAndCream.addCuisine(american);
	await beachesAndCream.addDiningExperience(casual);

	const beachesPoolBar = await Restaurant.create({
		name: "Beaches Pool Bar & Grill",
		location: "Disney's Grand Floridian Resort & Spa",
		type: "quick",
		price: "low",
		description:
			"Enjoy a drink in style at this gleaming white gazebo bar by the sandy beach and zero-entry pool. Sip on a selection of wines, draft beers and specialty cocktails—like the Sunshine Margarita. Snacks and poolside service are available.",
	});

	await beachesPoolBar.addCuisine(american);
	await beachesPoolBar.addDiningExperience(counter);
	await beachesPoolBar.addDiningExperience(poolBar);

	const belleVue = await Restaurant.create({
		name: "Belle Vue Lounge",
		location: "Disney's BoardWalk",
		type: "quick",
		price: "low",
		description:
			"Step into this quaint 1930s-style sitting room where radios play programs from the era. In the evening, enjoy a cocktail in a comfy chair or on the verandah. Coffee and pastries are served in the morning. Board games are also available.",
	});

	await belleVue.addCuisine(american);
	await belleVue.addDiningExperience(lounge);

	const beOurGuest = await Restaurant.create({
		name: "Be Our Guest",
		location: "Magic Kingdom Park",
		type: "table",
		price: "extra",
		description:
			"Enter the Beast's enchanted castle for an unforgettable dining experience—bon appétit!",
	});

	await beOurGuest.addCuisine(american);
	await beOurGuest.addCuisine(french);
	await beOurGuest.addDiningExperience(themed);

	const biergarten = await Restaurant.create({
		name: "Biergarten Restaurant",
		location: "Epcot",
		type: "table",
		price: "high",
		description:
			"Celebrate Oktoberfest all year long with authentic German cuisine and lively entertainment.",
	});

	await biergarten.addCuisine(german);
	await biergarten.addDiningExperience(family);
	await biergarten.addDiningExperience(themed);

	const bigRiverGrill = await Restaurant.create({
		name: "Big River Grill & Brewing Works",
		location: "Disney's BoardWalk",
		type: "table",
		price: "medium",
		description:
			"This family-friendly microbrewery and restaurant serves award-winning beers and fresh twists on American pub favorites.",
	});

	await bigRiverGrill.addCuisine(american);
	await bigRiverGrill.addDiningExperience(casual);

	const blazePizza = await Restaurant.create({
		name: "Blaze Fast-Fire'd Pizza",
		location: "Disney Springs",
		type: "quick",
		price: "low",
		description:
			"Visit this modern-day pizza joint to customize your own fast-fire’d 11” artisanal pie by choosing from over 40 delicious toppings and sauces. Freshly made salads and s’mores dessert pies are also popular picks.",
	});

	await blazePizza.addCuisine(american);
	await blazePizza.addDiningExperience(counter);

	const blockAndHans = await Restaurant.create({
		name: "Block & Hans",
		location: "Epcot",
		type: "quick",
		price: "low",
		description:
			"Wet your whistle with a stop at this popular spot and let the “Purveyors of Fine American Ale” introduce you to some of the great American craft beers! Mickey pretzels with cheese sauce and bottled water are also available.",
	});

	await blockAndHans.addCuisine(american);
	await blockAndHans.addDiningExperience(counter);

	const boardWalkBakery = await Restaurant.create({
		name: "BoardWalk Bakery",
		location: "Disney's BoardWalk",
		type: "quick",
		price: "low",
		description:
			"Stroll on by—from morning till night—for our house-specialty salads and sandwiches, a selection of hot and cold beverages and irresistible just-baked treats.",
	});

	await boardWalkBakery.addCuisine(american);
	await boardWalkBakery.addCuisine(bakery);
	await boardWalkBakery.addDiningExperience(counter);
	await boardWalkBakery.addDiningExperience(mobile);

	const boardWalkJoes = await Restaurant.create({
		name: "BoardWalk Joe's Marvelous Margaritas",
		location: "Disney's BoardWalk",
		type: "quick",
		price: "low",
		description:
			"Walk on the wild side with a frozen concoction, including margaritas, piña coladas and the Captain’s Seaside Sensation—a pineapple smoothie with a shot of Captain Morgan Spiced Rum! Mickey pretzels and nachos are also available.",
	});

	await boardWalkJoes.addCuisine(american);
	await boardWalkJoes.addCuisine(mexican);
	await boardWalkJoes.addDiningExperience(counter);

	const boathouse = await Restaurant.create({
		name: "The Boathouse",
		location: "Disney Springs",
		type: "table",
		price: "medium",
		description:
			"Set sail for upscale waterfront dining—including retro dream boats, vintage amphicars and a romantic water taxi.",
	});

	await boathouse.addCuisine(american);
	await boathouse.addCuisine(seafood);
	await boathouse.addCuisine(steakhouse);
	await boathouse.addDiningExperience(fine);

	const boatwrights = await Restaurant.create({
		name: "Boatwright's Dining Hall",
		location: "Disney's Port Orleans Resort - Riverside",
		type: "table",
		price: "medium",
		description:
			"Looking for southern hospitality in a casual but creative setting overlooking the Sassagoula River? Your ship’s come in.",
	});

	await boatwrights.addCuisine(american);
	await boatwrights.addDiningExperience(casual);

	const boma = await Restaurant.create({
		name: "Boma - Flavors of Africa",
		location: "Disney's Animal Kingdom Lodge",
		type: "table",
		price: "medium",
		description:
			"Looking for southern hospitality in a casual but creative setting overlooking the Sassagoula River? Your ship’s come in.",
	});

	await boma.addCuisine(african), await boma.addCuisine(american);
	await boma.addDiningExperience(buffet);
	await boma.addDiningExperience(themed);

	const cabanaBar = await Restaurant.create({
		name: "Cabana Bar and Beach Club",
		location: "Walt Disney World Dolphin Hotel",
		type: "table",
		price: "low",
		description:
			"Enjoy gourmet appetizers and main bites by the Dolphin Lap Pool: fish tacos, flatbreads, grilled Angus hanger steak and more. Sip signature cocktails served at a chic illuminated bar in the evening.",
	});

	await cabanaBar.addCuisine(american);
	await cabanaBar.addDiningExperience(casual);

	const cafeRix = await Restaurant.create({
		name: "Cafe Rix",
		location: "Disney's Coronado Springs Resort",
		type: "quick",
		price: "low",
		description:
			"Choose from an array of pastries, yogurts, fruits and salads, along with sweets like dessert cakes, gelatos and sorbets. Specialty coffees and smoothies are also available.",
	});

	await cafeRix.addCuisine(american);
	await cafeRix.addDiningExperience(counter);

	const californiaGrill = await Restaurant.create({
		name: "California Grill",
		location: "Disney's Contemporary Resort",
		type: "table",
		price: "high",
		description:
			"Savor the finest in Californian cooking, as you take in the sights of Seven Seas Lagoon and Magic Kingdom park.",
	});

	await californiaGrill.addCuisine(american);
	await californiaGrill.addCuisine(seafood);
	await californiaGrill.addCuisine(sushi);
	await californiaGrill.addDiningExperience(fine);

	const capa = await Restaurant.create({
		name: "Capa",
		location: "Four Season's Resort Orlando",
		type: "table",
		price: "extra",
		description:
			"Indulge in an unforgettable evening at this sleek restaurant and bar perched at the top of Four Seasons Resort Orlando.",
	});

	await capa.addCuisine(steakhouse);
	await capa.addDiningExperience(fine);

	const capeMayCafe = await Restaurant.create({
		name: "Cape May Cafe",
		location: "Disney's Beach Club Resort",
		type: "table",
		price: "high",
		description:
			"Coast on down to this New England-style venue where you can join some Disney pals for a lively Character breakfast—or set sail later in the day for a seafood dinner buffet. Please note: Disney Characters join Guests for breakfast only.",
	});

	await capeMayCafe.addCuisine(american);
	await capeMayCafe.addCuisine(seafood);
	await capeMayCafe.addDiningExperience(buffet);
	await capeMayCafe.addDiningExperience(casual);
	await capeMayCafe.addDiningExperience(character);

	const capeTownLounge = await Restaurant.create({
		name: "Cape Town Lounge and Wine Bar",
		location: "Disney's Animal Kingdom Lodge",
		type: "table",
		price: "low",
		description:
			"Sample South African wines at this intimate watering hole near Jiko – The Cooking Place. Enjoy an appetizer and wine pairing prior to your meal at Jiko, or order from the full Jiko menu and dine at the bar. A full bar is also available.",
	});

	await capeTownLounge.addCuisine(african);
	await capeTownLounge.addDiningExperience(lounge);

	const captCooks = await Restaurant.create({
		name: "Capt. Cook's",
		location: "Disney's Polynesian Village Resort",
		type: "quick",
		price: "low",
		description:
			"Explore your options each morning as you start the day with a Mickey Waffle or banana-stuffed Tonga Toast. For lunch or dinner, discover an adventurous assortment of sandwiches, salads and more. Beer and wine are also available.",
	});

	await captCooks.addCuisine(american);
	await captCooks.addCuisine(seafood);
	await captCooks.addDiningExperience(counter);
	await captCooks.addDiningExperience(mobile);

	const caravanRoad = await Restaurant.create({
		name: "Caravan Road",
		location: "Disney's Animal Kingdom",
		type: "quick",
		price: "low",
		description:
			"Flow by this refreshing kiosk—located directly across Discovery River from the Tree of Life—where you can discover a cascade of vegetarian cuisine and a selection of beverages, along with exciting seasonal fare offered throughout the year.",
	});

	await caravanRoad.addCuisine(asian);
	await caravanRoad.addDiningExperience(fastCasual);

	const caseysCorner = await Restaurant.create({
		name: "Casey's Corner",
		location: "Magic Kingdom",
		type: "quick",
		price: "low",
		description:
			"Hit it out of the park with American baseball favorites: hot dogs, corn dog nuggets, French fries and ice-cold lemonade slushies. You may even catch Jim tickling the ivories to ragtime tunes outside. Soft drinks are also available.",
	});

	await caseysCorner.addCuisine(american);
	await caseysCorner.addDiningExperience(counter);
	await caseysCorner.addDiningExperience(mobile);

	const catalinaEddies = await Restaurant.create({
		name: "Catalina Eddie's",
		location: "Disney's Hollywood Studios",
		type: "quick",
		price: "low",
		description:
			"Cruise over for fresh hot pizza, zesty Caesar salads and more. Then, satisfy your sweet tooth with cheesecake verrine. Hot and cold drinks are also available.",
	});

	await catalinaEddies.addCuisine(american);
	await catalinaEddies.addDiningExperience(counter);
	await catalinaEddies.addDiningExperience(mobile);

	const centertownMarket = await Restaurant.create({
		name: "Centertown Market",
		location: "Disney's Caribbean Beach Resort",
		type: "quick",
		price: "low",
		description:
			"Savor exotic island flavors at this fast-casual restaurant with an indoor street market vibe featuring classic breakfast dishes and flavorful Latin- and Caribbean-inspired lunch and dinner menus.",
	});

	await centertownMarket.addCuisine(american);
	await centertownMarket.addCuisine(latin);
	await centertownMarket.addDiningExperience(fastCasual);
	await centertownMarket.addDiningExperience(mobile);

	const centertownMarketGrabAndGo = await Restaurant.create({
		name: "Centertown Market Grab & Go",
		location: "Disney's Caribbean Beach Resort",
		type: "quick",
		price: "low",
		description:
			"Visit this convenient market for fast meals on the go—from salads, sandwiches and snacks to bakery items and a variety of bottled beverages.",
	});

	await centertownMarketGrabAndGo.addCuisine(american);
	await centertownMarketGrabAndGo.addDiningExperience(fastCasual);

	const chefArt = await Restaurant.create({
		name: "Chef Art Smith's Homecomin'",
		location: "Disney Springs",
		type: "table",
		price: "medium",
		description:
			"Dig into farm-to-fork cuisine showcasing Florida’s freshest flavors—all crafted from recipes by this award-winning celebrity chef!",
	});

	await chefArt.addCuisine(american);
	await chefArt.addDiningExperience(casual);

	const chefMickeys = await Restaurant.create({
		name: "Chef Mickey's",
		location: "Disneyy's Contemporary Resort",
		type: "table",
		price: "medium",
		description:
			"Dig into farm-to-fork cuisine showcasing Florida’s freshest flavors—all crafted from recipes by this award-winning celebrity chef!",
	});

	await chefMickeys.addCuisine(american);
	await chefMickeys.addDiningExperience(character);
	await chefMickeys.addDiningExperience(family);

	console.log(`seeded successfully`);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
	console.log("seeding...");
	try {
		await seed();
	} catch (err) {
		console.error(err);
		process.exitCode = 1;
	} finally {
		console.log("closing db connection");
		await db.close();
		console.log("db connection closed");
	}
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
	runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
