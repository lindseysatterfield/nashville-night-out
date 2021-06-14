import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import RestaurantCard from '../../components/RestaurantCard';
import { getFavoriteRestaurants } from '../data/RestaurantData';
import face from '../../assets/face.png';

export default function Favorites({ user, setRestaurants }) {
  // const [restaurants, setRestaurants] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getFavoriteRestaurants(user.uid).then((response) => setFavorites(response));
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center">
      {favorites.length === 0
        ? <>
            <h1 className="text-center my-3">You have not selected any favorites!</h1>
            <img className="face" src={face} alt="Sad face icon" />
          </>
        : <h1 className="text-center my-3">Favorites</h1>
      }
      <div className="all-restaurants-container">
        {favorites.map((restaurantInfo) => (
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

Favorites.propTypes = {
  user: PropTypes.any,
  setRestaurants: PropTypes.func
};
