import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, Button } from 'reactstrap';
import { getRestaurants } from '../data/RestaurantData';
import RestaurantCard from '../../components/RestaurantCard';

export default function LetsEat({ user }) {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [singleRestaurant, setSingleRestaurant] = useState({});
  const [showRestaurant, setShowRestaurant] = useState(false);

  const handleClick = () => {
    setShowRestaurant(true);
    setSingleRestaurant(allRestaurants[Math.floor(Math.random() * allRestaurants.length)]);
  };

  useEffect(() => {
    getRestaurants(user.uid)
      .then((restaurants) => {
        setAllRestaurants(restaurants);
      });
  }, []);

  return (
    <Container>
      <h1 className="my-3 text-center">Let&apos;s Eat!</h1>
      <h4 className="my-3 text-center">Where should we eat tonight?</h4>
      <div className="my-3 text-center">
        {showRestaurant
          ? <Button onClick={handleClick}>Get another restaurant!</Button>
          : <Button onClick={handleClick}>Let&apos;s Eat</Button>
        }
      </div>
      {showRestaurant
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
              viewTitle={'LetsEat'}
            />
          </div>
        : ''
      }
    </Container>
  );
}

LetsEat.propTypes = {
  user: PropTypes.any
};
