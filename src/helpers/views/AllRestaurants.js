import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ClipLoader from 'react-spinners/ClipLoader';
import RestaurantCard from '../../components/RestaurantCard';
import face from '../../assets/face.png';
import { getRestaurants } from '../data/RestaurantData';

export default function AllRestaurants({ user }) {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState('');

  useEffect(() => {
    getRestaurants(user.uid).then((response) => {
      setRestaurants(response);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    setFilteredData(
      restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, restaurants]);

  return (
    <>
    { loading
      ? <div className="loading">
          <h1 className="text-center my-3">Restaurants Loading...</h1>
          <ClipLoader color="#ffffff" loading={loading} size={150} className="spinner" />
        </div>
      : <div className="d-flex flex-column justify-content-center">
      {restaurants.length === 0
        ? <>
            <h1 className="text-center my-3">You have not added any restaurants!</h1>
            <img className="face" src={face} alt="Sad face icon" />
            <h1 className="text-center my-3">Please add some and get to eating!</h1>
          </>
        : <h1 className="text-center my-3">All Restaurants</h1>
      }
      <div className="all-restaurants-container">
        <input type="text" placeholder="Search restaurant name" onChange={(e) => setSearch(e.target.value)} />
        { filteredData.length === 0
          ? <>
              <h1 className="text-center my-3">No restaurants found!</h1>
              <img className="face" src={face} alt="Sad face icon" />
            </>
          : <>
            {filteredData.map((restaurantInfo) => (
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
          </>
        }
      </div>
    </div>
    }
    </>
  );
}

AllRestaurants.propTypes = {
  user: PropTypes.any
};
