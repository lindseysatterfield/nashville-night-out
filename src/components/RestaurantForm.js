import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container, FormGroup, Button, Label, Input, Form, Col, Row
} from 'reactstrap';
import { addRestaurant, updateRestaurant } from '../helpers/data/RestaurantData';

export default function RestaurantForm({
  formTitle,
  user,
  setRestaurants,
  firebaseKey,
  name,
  image,
  websiteLink,
  reservationLink,
  description,
  cuisineType,
  neighborhood,
  favorite,
  visited
}) {
  const [restaurant, setRestaurant] = useState({
    name: name || '',
    image: image || '',
    websiteLink: websiteLink || '',
    reservationLink: reservationLink || '',
    cuisineType: cuisineType || '',
    description: description || '',
    neighborhood: neighborhood || '',
    favorite: favorite || false,
    visited: visited || false,
    uid: user.uid,
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setRestaurant((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleCheckboxChange = (e) => {
    setRestaurant((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.name === 'favorite' || 'visited' ? e.target.checked : e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (restaurant.firebaseKey) {
      updateRestaurant(restaurant, firebaseKey, user.uid).then((response) => setRestaurants(response));
    } else {
      addRestaurant(restaurant, user.uid).then((restaurantArray) => setRestaurants(restaurantArray));
    }
  };

  return (
    <Container className='form-container'>
      <Form id="form" autoComplete='off'>
        <h4 className="text-center my-3">{formTitle}</h4>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>Name</Label>
              <Input type="text" name="name" value={restaurant.name} onChange={handleInputChange} placeholder="Name" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Image</Label>
              <Input type="url" name="image" value={restaurant.image} onChange={handleInputChange} placeholder="Image URL" />
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label>Description</Label>
          <Input type="text" name="description" value={restaurant.description} onChange={handleInputChange} placeholder="Description of restaurant..." maxLength="200"/>
        </FormGroup>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>Website</Label>
              <Input type="url" name="websiteLink" value={restaurant.websiteLink} onChange={handleInputChange} placeholder="Website URL" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Reservation</Label>
              <Input type="url" name="reservationLink" value={restaurant.reservationLink} onChange={handleInputChange} placeholder="Reservation URL" />
            </FormGroup>
          </Col>
        </Row>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label>Cuisine</Label>
              <Input type="text" name="cuisineType" value={restaurant.cuisineType} onChange={handleInputChange} placeholder="Type of cuisine" />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label>Neighborhood</Label>
              <Input type="text" name="neighborhood" value={restaurant.neighborhood} onChange={handleInputChange} placeholder="Nashville neighborhood" />
            </FormGroup>
          </Col>
        </Row>
        <div className="d-flex justify-content-center">
          <FormGroup check id="form-check">
            <Input type="checkbox" name="favorite" onChange={handleCheckboxChange} checked={restaurant.favorite} value={restaurant.favorite}
            />
            <Label check>Favorite?</Label>
          </FormGroup>
          <FormGroup check id="form-check">
            <Input type="checkbox" name="visited" onChange={handleCheckboxChange} checked={restaurant.visited} value={restaurant.visited}
            />
            <Label check>Visited?</Label>
          </FormGroup>
        </div>
        <div className="d-flex justify-content-center">
          <Button onClick={handleSubmit} className="mt-2">Submit</Button>
        </div>
      </Form>
    </Container>
  );
}

RestaurantForm.propTypes = {
  user: PropTypes.any,
  formTitle: PropTypes.string,
  setRestaurants: PropTypes.func,
  firebaseKey: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  websiteLink: PropTypes.string,
  reservationLink: PropTypes.string,
  description: PropTypes.string,
  cuisineType: PropTypes.string,
  neighborhood: PropTypes.string,
  favorite: PropTypes.bool,
  visited: PropTypes.bool
};
