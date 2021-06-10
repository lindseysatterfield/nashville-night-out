import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardBody, CardSubtitle,
  CardTitle, Button
} from 'reactstrap';
import { deleteRestaurant } from '../helpers/data/RestaurantData';

function RestaurantCard({
  firebaseKey,
  name,
  image,
  websiteLink,
  reservationLink,
  description,
  cuisineType,
  neighborhood,
  setRestaurants,
  user
}) {
  const handleClick = () => {
    deleteRestaurant(firebaseKey, user.uid).then((restaurantArray) => setRestaurants(restaurantArray));
  };

  return (
    <Card id="card">
      <CardImg top width="100%" className="restaurant-img" src={image} alt="Image of food at restaurant" />
      <CardBody className="card-body d-flex flex-column">
        <CardTitle className="text-center" id="restaurant-name">{name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{description}</CardSubtitle>
        <div className="mt-auto">
          <div className="details-container">
            <div className="details-name-container">
              <h6>Cuisine</h6>
              <CardSubtitle tag="h6" className="mb-2 text-muted">{cuisineType}</CardSubtitle>
            </div>
            <div className="details-name-container">
              <h6>Neighborhood</h6>
              <CardSubtitle tag="h6" className="mb-2 text-muted">{neighborhood}</CardSubtitle>
              </div>
            </div>
          <div className="details-container">
            <div className="details-name-container">
            <CardSubtitle tag="h6" className="mb-2 text-muted">Website</CardSubtitle>
              <a href={websiteLink} target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios/100/000000/restaurant-menu.png" className="links-icons"/></a>
            </div>
            <div className="details-name-container">
              <CardSubtitle tag="h6" className="mb-2 text-muted">Reservations</CardSubtitle>
              <a href={reservationLink} target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios/100/000000/reservation.png" className="links-icons"/></a>
            </div>
          </div>
          <div className="card-buttons-container">
            <Button color="none" className="card-btn" onClick={handleClick}><img src="https://img.icons8.com/ios/100/000000/delete--v2.png" className="card-btn-icons"/></Button>
            <Button color="none" className="card-btn" onClick={handleClick}><img src="https://img.icons8.com/ios/100/000000/edit--v2.png" className="card-btn-icons"/></Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

RestaurantCard.propTypes = {
  firebaseKey: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  websiteLink: PropTypes.string,
  reservationLink: PropTypes.string,
  description: PropTypes.string,
  cuisineType: PropTypes.string,
  neighborhood: PropTypes.string,
  setRestaurants: PropTypes.func,
  user: PropTypes.any
};

export default RestaurantCard;
