import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RestaurantForm from '../../components/RestaurantForm';

export default function AddRestaurant({ user }) {
  const [, setRestaurants] = useState([]);

  return (
    <>
      <div className="add-restaurant-container">
        <h1 className="my-3">Add Restaurant</h1>
        <RestaurantForm user={user} setRestaurants={setRestaurants} />
      </div>
   </>
  );
}

AddRestaurant.propTypes = {
  user: PropTypes.any
};
