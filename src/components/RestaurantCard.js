import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

function RestaurantCard({
  firebaseKey,
  name,
  image,
  websiteLink,
  reservationLink,
  description,
  cuisineType,
  neighborhood
}) {
  return (
    <Card body className="card" id={firebaseKey}>
      <CardImg top width="100%" className="restaurant-img" src={image} alt="Image of food at restaurant" />
      <CardBody>
        <CardTitle tag="h5">{name}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{description}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{cuisineType}</CardSubtitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">{neighborhood}</CardSubtitle>
        <div className="links-container">
          <CardSubtitle><a href={websiteLink} target="_blank" rel="noopener noreferrer"></a></CardSubtitle>
          <CardSubtitle><a href={reservationLink} target="_blank" rel="noopener noreferrer"></a></CardSubtitle>
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
  neighborhood: PropTypes.string
};

export default RestaurantCard;
