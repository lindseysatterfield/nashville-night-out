import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container, FormGroup, Button, Label, Input, Form, Col, Row
} from 'reactstrap';
import { addRestaurant } from '../helpers/data/RestaurantData';

export default function RestaurantForm({ user }) {
  const [restaurant, setRestaurant] = useState({
    name: '',
    image: '',
    websiteLink: '',
    reservationLink: '',
    cuisineType: '',
    description: '',
    neighborhood: '',
    favorite: false,
    visited: false,
    uid: user.uid,
  });

  const handleInputChange = (e) => {
    setRestaurant((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRestaurant(restaurant);
  };

  return (
    <Container className='form-container'>
      <Form id="form">
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
          <Input type="text" name="description" value={restaurant.description} onChange={handleInputChange} placeholder="Description of restaurant..."/>
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
        <FormGroup check>
          <Input type="checkbox" name="favorite" onChange={handleInputChange} checked={restaurant.favorite} value={restaurant.favorite}/>
          <Label check>Favorite?</Label>
        </FormGroup>
        <FormGroup check>
          <Input type="checkbox" name="visited" onChange={handleInputChange} checked={restaurant.visited} value={restaurant.visited}
          />
          <Label check>Visited?</Label>
        </FormGroup>
        <Button onClick={handleSubmit}>Submit</Button>
      </Form>
    </Container>
  );
}

RestaurantForm.propTypes = {
  user: PropTypes.any
};
