import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RestaurantForm from '../../components/RestaurantForm';
import footer from '../../assets/footer.png';

export default function AddRestaurant({ user }) {
  const [, setRestaurants] = useState([]);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center footer">
        <img src={footer} className="nashville-views mt-3" alt="image of Nashville"/>
      </div>
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
