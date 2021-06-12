import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'reactstrap';
import { getRestaurants } from '../data/RestaurantData';
import RestaurantCard from '../../components/RestaurantCard';

export default function LetsEat({ user, setRestaurants }) {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [singleRestaurant, setSingleRestaurant] = useState({});
  const [showRestaurant, setShowRestaurant] = useState(false);

  const handleClick = () => {
    if (showRestaurant) {
      setShowRestaurant(false);
      setSingleRestaurant(allRestaurants[Math.floor(Math.random() * allRestaurants.length)]);
    } else {
      setShowRestaurant(true);
    }
  };

  useEffect(() => {
    getRestaurants(user.uid)
      .then((restaurants) => {
        setAllRestaurants(restaurants);
      });
  }, []);

  return (
    <Container>
      <h1 className="my-3">Let&apos;s Eat</h1>
      <Button onClick={handleClick}>Let&apos;s Eat</Button>
      {!showRestaurant
        ? <div className="all-restaurants-container">
          <RestaurantCard
            key={singleRestaurant.firebaseKey}
            firebaseKey={singleRestaurant.firebaseKey}
            image={singleRestaurant.image}
            name={singleRestaurant.name}
            websiteLink={singleRestaurant.websiteLink}
            reservationLink={singleRestaurant.reservationLink}
            description={singleRestaurant.description}
            cuisineType={singleRestaurant.cuisineType}
            neighborhood={singleRestaurant.neighborhood}
            favorite={singleRestaurant.favorite}
            visited={singleRestaurant.visited}
            user={user}
            setRestaurants={setRestaurants}
          />
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
