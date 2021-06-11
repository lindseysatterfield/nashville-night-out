import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardImg, CardBody, CardSubtitle, Button
} from 'reactstrap';
import { deleteRestaurant } from '../helpers/data/RestaurantData';
import RestaurantForm from './RestaurantForm';
import heart from '../assets/heart.png';

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
  user,
  favorite,
  visited
}) {
  const [editing, setEditing] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteRestaurant(firebaseKey, user.uid).then((restaurantArray) => setRestaurants(restaurantArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
    <Card id="card">
      <CardImg top width="100%" className="restaurant-img" src={image} alt="Food image" />
      <CardBody className="card-body d-flex flex-column">
        <div className="favorite-section">
          <h2 className="text-center" id="restaurant-name">{name}</h2>
          {favorite ? <img src={heart} className="heart" /> : ''}
        </div>
        <CardSubtitle tag="h6" className="mb-2 text-muted text-justify">{description}</CardSubtitle>
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
            <CardSubtitle tag="h6" className="mb-2">Website</CardSubtitle>
              <a href={websiteLink} target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios/100/000000/restaurant-menu.png" className="links-icons"/></a>
            </div>
            <div className="details-name-container">
              <CardSubtitle tag="h6" className="mb-2">Reservations</CardSubtitle>
              <a href={reservationLink} target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/ios/100/000000/reservation.png" className="links-icons" /></a>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            {/* <p className='card-text mx-4'>{favorite ? <img src={heart} className="heart" /> : ''}</p> */}
            <p className='card-text mx-4'>{visited ? 'Visited' : ''}</p>
          </div>
          <div className="card-buttons-container">
            <Button color="none" className="card-btn" onClick={() => handleClick('edit')}>
              {editing
                ? <img src="https://img.icons8.com/ios/100/000000/close-window.png" className="card-btn-icons"/>
                : <img src="https://img.icons8.com/ios/100/000000/edit--v2.png" className="card-btn-icons"/>
              }
            </Button>
            <Button color="none" className="card-btn" onClick={() => handleClick('delete')}><img src="https://img.icons8.com/ios/100/000000/delete--v2.png" className="card-btn-icons"/></Button>
          </div>
          {editing && <RestaurantForm
            formTitle="Edit Restaurant"
            firebaseKey={firebaseKey}
            name={name}
            image={image}
            websiteLink={websiteLink}
            reservationLink={reservationLink}
            description={description}
            cuisineType={cuisineType}
            neighborhood={neighborhood}
            favorite={favorite}
            visited={visited}
            setRestaurants={setRestaurants}
            user={user}
          />}
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
  user: PropTypes.any,
  favorite: PropTypes.bool,
  visited: PropTypes.bool
};

export default RestaurantCard;
