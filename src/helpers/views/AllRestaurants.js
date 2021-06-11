import React from 'react';
import PropTypes from 'prop-types';
import RestaurantCard from '../../components/RestaurantCard';
import face from '../../assets/face.png';

export default function AllRestaurants({ restaurants, setRestaurants, user }) {
  return (
    <div className="d-flex flex-column justify-content-center">
      {restaurants.length === 0
        ? <>
            <h1 className="text-center my-3">No restaurants here!</h1>
            <img className="face" src={face} alt="Sad face icon" />
            <h1 className="text-center my-3">Please add some and get to eating!</h1>
          </>
        : <h1 className="text-center my-3">All Restaurants</h1>
      }
      <div className="all-restaurants-container">
        {restaurants.map((restaurantInfo) => (
          <RestaurantCard
            key={restaurantInfo.firebaseKey}
            firebaseKey={restaurantInfo.firebaseKey}
            image={restaurantInfo.image}
            name={restaurantInfo.name}
            websiteLink={restaurantInfo.websiteLink}
            reservationLink={restaurantInfo.reservationLink}
            description={restaurantInfo.description}
            cuisineType={restaurantInfo.cuisineType}
            neighborhood={restaurantInfo.neighborhood}
            favorite={restaurantInfo.favorite}
            visited={restaurantInfo.visited}
            user={user}
            setRestaurants={setRestaurants}
          />
        ))}
      </div>
    </div>
  );
}

AllRestaurants.propTypes = {
  restaurants: PropTypes.array,
  setRestaurants: PropTypes.func,
  user: PropTypes.any
};
