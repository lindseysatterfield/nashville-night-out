import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import RestaurantForm from '../../components/RestaurantForm';

export default function AddRestaurant({ user }) {
  return (
    <Container className="add-restaurant-container">
      <h1>Add Restaurant</h1>
      <RestaurantForm user={user} />
    </Container>
  );
}

AddRestaurant.propTypes = {
  user: PropTypes.any
};
