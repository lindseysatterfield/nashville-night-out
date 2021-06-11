import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import RestaurantForm from '../../components/RestaurantForm';

export default function AddRestaurant({ user, setRestaurants }) {
  return (
    <Container className="add-restaurant-container">
      <h1 className="my-3">Add Restaurant</h1>
      <RestaurantForm user={user} setRestaurants={setRestaurants} />
    </Container>
  );
}

AddRestaurant.propTypes = {
  user: PropTypes.any,
  setRestaurants: PropTypes.func
};
