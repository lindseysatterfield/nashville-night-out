import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

export default function Home({ user }) {
  return (
    <Container className="home-container">
      <h1 className="my-3">Nashville Night Out</h1>
      {
        user
          ? <h2>Welcome, {user.fullName}!</h2>
          : ''
      }
      <h3>Ever had trouble choosing a restaurant? Do you find yourself asking, &quot;Where should we eat tonight?&quot;</h3>
      <h3>With the click of a button, a random Nashville restaurant will appear to aid your search in finding the perfect dining experience!</h3>
      {user
        ? <h3>To get started, please add restaurants and hit the Let&apos;s Eat button!</h3>
        : <h3>To get started, please log in.</h3>}
    </Container>
  );
}

Home.propTypes = {
  user: PropTypes.any
};
