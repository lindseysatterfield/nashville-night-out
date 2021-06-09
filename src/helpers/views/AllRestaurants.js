import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import RestaurantCard from '../../components/RestaurantCard';

export default function AllRestaurants({ restaurants, user }) {
  return (
    <Container>
      <h1>All Restaurants</h1>
      <Container className="all-restaurants-container">
        {restaurants.map((restaurantInfo) => (
          <RestaurantCard key={restaurantInfo.firebaseKey}
            image={restaurantInfo.image}
            name={restaurantInfo.name}
            websiteLink={restaurantInfo.websiteLink}
            reservationLink={restaurantInfo.reservationLink}
            description={restaurantInfo.description}
            cuisineType={restaurantInfo.cuisineType}
            neighborhood={restaurantInfo.neighborhood}
            user={user}
          />
        ))}
      </Container>
    </Container>
  );
}

AllRestaurants.propTypes = {
  restaurants: PropTypes.array,
  user: PropTypes.any
};
