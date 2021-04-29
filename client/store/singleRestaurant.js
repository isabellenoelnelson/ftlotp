import axios from "axios";

const SET_SINGLE_RESTAURANT = "SET_SINGLE_RESTAURANT";
const RESTAURANT_LOADING = "RESTAURANT_LOADING";
const RESTAURANT_LOADING_SUCCESS = "RESTAURANT_LOADING_SUCCESS";

const _setSingleRestaurant = (restaurant) => {
	return {
		type: SET_SINGLE_RESTAURANT,
		restaurant,
	};
};

const restaurantLoading = () => ({
	type: RESTAURANT_LOADING,
});

const restaurantLoadingSuccess = () => ({
	type: RESTAURANT_LOADING_SUCCESS,
});

export const fetchSingleRestaurant = (id) => {
	return async (dispatch) => {
		await dispatch(restaurantLoading());
		const { data: restaurant } = await axios.get(`/api/restaurants/${id}`);
		dispatch(_setSingleRestaurant(restaurant));
		dispatch(restaurantLoadingSuccess());
	};
};

const initialState = {
	restaurant: {},
	loading: false,
};

export default function singleRestaurantsReducer(state = initialState, action) {
	switch (action.type) {
		case SET_SINGLE_RESTAURANT:
			return { ...state, restaurant: action.restaurant };
		case RESTAURANT_LOADING:
			return { ...state, loading: true };
		case RESTAURANT_LOADING_SUCCESS:
			return { ...state, loading: false };
		default:
			return state;
	}
}
