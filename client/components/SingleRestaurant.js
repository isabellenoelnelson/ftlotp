import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSingleRestaurant } from "../store/singleRestaurant";

class SingleRestaurant extends Component {
	componentDidMount() {
		const id = this.props.match.params.id;
		this.props.fetchSingleRestaurant(id);
	}
	render() {
		return <div>Hello World</div>;
	}
}

const mapState = (state) => {
	return {
		restaurant: state.singleRestaurant.restaurant,
		loading: state.singleRestaurant.loading,
	};
};

const mapDispatch = (dispatch) => {
	return {
		fetchSingleRestaurant: (id) => dispatch(fetchSingleRestaurant(id)),
	};
};

export default connect(mapState, mapDispatch)(SingleRestaurant);
