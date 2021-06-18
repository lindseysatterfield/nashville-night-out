import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

export default function Home({ user }) {
  return (
    <Container className="home-container">
      <h1 className="my-3 title">&#10024; Nashville Night Out &#10024;</h1>
      { user ? <h3>Welcome, {user.fullName}!</h3> : '' }
      {/* <h3>Ever had trouble choosing a restaurant? Do you find yourself asking, &quot;Where should we eat tonight?&quot;</h3> */}
      <h4>Nashville is quickly becoming a foodie town. There are so many restaurants to try. Ever wanted a way to track new restaurants and ones that you have already visited? Look no further! Use this as a way to add your favorite restaurants and their information. Once you dine at a restaurant, come back and select it as a favorite or if you have visited.</h4>
      <h4>Have you ever had trouble choosing a restaurant? Do you find yourself asking, &quot;Where should we eat tonight?&quot; Use the Let&apos;s Eat feature! The Let&apos;s Eat randomizer goes through your added restaurants and selects one at random!</h4>
      {user
        ? <h4>To get started, please add restaurants and hit the Let&apos;s Eat button!</h4>
        : <h4>To get started, please log in.</h4>
      }
    </Container>
  );
}

Home.propTypes = {
  user: PropTypes.any
};
