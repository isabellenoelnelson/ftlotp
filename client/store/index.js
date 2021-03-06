import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import restaurantsReducer from "./restaurant";
import singleRestaurantsReducer from "./singleRestaurant";

const reducer = combineReducers({
	auth,
	restaurants: restaurantsReducer,
	singleRestaurant: singleRestaurantsReducer,
});
const middleware = composeWithDevTools(
	applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
