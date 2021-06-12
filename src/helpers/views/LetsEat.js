import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'reactstrap';
import { getRestaurants } from '../data/RestaurantData';
import RestaurantCard from '../../components/RestaurantCard';

export default function LetsEat({ user, setRestaurants }) {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [singleRestaurant, setSingleRestaurant] = useState({});
  const [showRestaurant, setRestaurant] = useState(false);

  const handleClick = () => {
    if (showRestaurant) {
      setRestaurant(false);
      setSingleRestaurant(allRestaurants[Math.floor(Math.random() * allRestaurants.length)]);
    } else {
      setRestaurant(true);
    }
  };

  useEffect(() => {
    getRestaurants(user.uid)
      .then((restaurants) => {
        setAllRestaurants(restaurants);
        setSingleRestaurant(restaurants[Math.floor(Math.random() * restaurants.length)]);
      });
  }, []);

  console.warn(singleRestaurant);

  return (
    <Container>
      <h1 className="my-3">Let&apos;s Eat</h1>
      <Button onClick={handleClick}>Let&apos;s Eat</Button>
      {showRestaurant
        ? <div className="all-restaurants-container">
        {allRestaurants.map((restaurantInfo) => (
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
        : 'Press again for another restaurant'
      }
    </Container>
  );
}

LetsEat.propTypes = {
  user: PropTypes.any,
  setRestaurants: PropTypes.func
};
