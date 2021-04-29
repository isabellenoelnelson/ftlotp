import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRestaurants } from "../store/restaurant";
import { Link } from "react-router-dom";

class AllRestaurants extends Component {
	componentDidMount() {
		this.props.fetchRestaurants();
	}

	render() {
		const restaurants = this.props.restaurants;
		return (
			<div>
				{restaurants.map((restaurant) => (
					<div key={restaurant.id}>
						<Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
						<h2>Location: {restaurant.location}</h2>
						<h3>
							Cuisine:{" "}
							{restaurant.cuisines.map((cuisine) => (
								<div key={cuisine.id}>
									<h3>{cuisine.type}</h3>
								</div>
							))}
						</h3>
					</div>
				))}
			</div>
		);
	}
}

const mapState = (state) => {
	return {
		restaurants: state.restaurants.all,
		loading: state.restaurants.loading,
	};
};

const mapDispatch = (dispatch) => {
	return {
		fetchRestaurants: () => dispatch(fetchRestaurants()),
	};
};

export default connect(mapState, mapDispatch)(AllRestaurants);
