import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import AddRestaurant from '../helpers/views/AddRestaurant';

export default function RestaurantForm({ user }) {
  const [restaurant, setRestaurant] = useState({
    name: '',
    image: '',
    websiteLink: '',
    reservationLink: '',
    cuisineType: '',
    description: '',
    neighborhood: '',
    favorite: false,
    visited: false,
    uid: user.uid,
  });

  const handleInputChange = (e) => {
    setRestaurant((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   AddRestaurant(restaurant);
  // };

  return (
    <Container>

    </Container>
  );
}

RestaurantForm.propTypes = {
  user: PropTypes.any
}
