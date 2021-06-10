import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardBody, CardSubtitle,
  CardTitle
} from 'reactstrap';

function RestaurantCard({
  name,
  image,
  websiteLink,
  reservationLink,
  description,
  cuisineType,
  neighborhood
}) {
  return (
    <Card id="card">
      <CardImg top width="100%" className="restaurant-img" src={image} alt="Image of food at restaurant" />
      <CardBody className="card-body d-flex flex-column">
        <CardTitle className="text-center" tag="h3">{name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{description}</CardSubtitle>
        <div className="mt-auto">
          <div className="links-container">
            <div className="links-name-container">
              <h6>Cuisine</h6>
              <CardSubtitle tag="h6" className="mb-2 text-muted">{cuisineType}</CardSubtitle>
            </div>
            <div className="links-name-container">
              <h6>Neighborhood</h6>
              <CardSubtitle tag="h6" className="mb-2 text-muted">{neighborhood}</CardSubtitle>
              </div>
            </div>
          <div className="links-container">
            <div className="links-name-container">
            <CardSubtitle tag="h6" className="mb-2 text-muted">Website</CardSubtitle>
              <a href={websiteLink} target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios/100/000000/restaurant-menu.png" className="links-icons"/></a>
            </div>
            <div className="links-name-container">
              <CardSubtitle tag="h6" className="mb-2 text-muted">Reservations</CardSubtitle>
              <a href={reservationLink} target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios/100/000000/reservation.png" className="links-icons"/></a>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

RestaurantCard.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  websiteLink: PropTypes.string,
  reservationLink: PropTypes.string,
  description: PropTypes.string,
  cuisineType: PropTypes.string,
  neighborhood: PropTypes.string
};

export default RestaurantCard;
