import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ClipLoader from 'react-spinners/ClipLoader';
import RestaurantCard from '../../components/RestaurantCard';
import { getFavoriteRestaurants } from '../data/RestaurantData';
import face from '../../assets/face.png';
import footer from '../../assets/footer.png';

export default function Favorites({ user, setRestaurants }) {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFavoriteRestaurants(user.uid).then((response) => {
      setFavorites(response);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center footer">
        <img src={footer} className="nashville-views mt-3" alt="image of Nashville"/>
      </div>
      { loading
        ? <div className="loading">
            <h1 className="text-center my-3">Favorites Loading...</h1>
            <ClipLoader color="#ffffff" loading={loading} size={150} className="spinner" />
          </div>
        : <div className="d-flex flex-column justify-content-center">
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
      }
    </>
  );
}

Favorites.propTypes = {
  user: PropTypes.any,
  setRestaurants: PropTypes.func
};
