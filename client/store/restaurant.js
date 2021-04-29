import axios from "axios";

const SET_RESTAURANTS = "SET_RESTAURANTS";
const RESTAURANTS_LOADING = "RESTAURANTS_LOADING";
const RESTAURANTS_LOADING_SUCCESS = "RESTAURANTS_LOADING_SUCCESS";

const setRestaurants = (restaurants) => {
	return {
		type: SET_RESTAURANTS,
		restaurants,
	};
};

const restaurantsLoading = () => ({
	type: RESTAURANTS_LOADING,
});

const restaurantsLoadingSuccess = () => ({
	type: RESTAURANTS_LOADING_SUCCESS,
});

export const fetchRestaurants = () => {
	return async (dispatch) => {
		await dispatch(restaurantsLoading());
		const { data: restaurants } = await axios.get("/api/restaurants");
		dispatch(setRestaurants(restaurants));
		dispatch(restaurantsLoadingSuccess());
	};
};

const initialState = {
	all: [],
	loading: false,
};

export default function restaurantsReducer(state = initialState, action) {
	switch (action.type) {
		case SET_RESTAURANTS:
			return { ...state, all: action.restaurants };
		case RESTAURANTS_LOADING:
			return { ...state, loading: true };
		case RESTAURANTS_LOADING_SUCCESS:
			return { ...state, loading: false };
		default:
			return state;
	}
}
