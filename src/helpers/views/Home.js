import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';
import sparkles from '../../assets/sparkles.png';
import footer from '../../assets/footer.png';

export default function Home({ user }) {
  return (
    <>
      <Container className="home-container">
        <div className="d-flex justify-content-center align-items-center">
          <img src={sparkles} className="sparkles"/><h1 className="mt-3 title">Nashville Night Out</h1><img src={sparkles} className="sparkles"/>
        </div>
        <div className="d-flex justify-content-center align-items-center footer mb-5">
          <img src={footer} className="nashville-home-views" alt="image of Nashville"/>
        </div>
        { user ? <h3>Welcome, {user.fullName}!</h3> : '' }
        <h4>Nashville is quickly becoming a foodie town. There are so many restaurants to try. Ever wanted a way to track new restaurants and ones that you have already visited? Look no further! Use this as a way to add your favorite restaurants and their information. Once you dine at a restaurant, come back and select it as a favorite or if you have visited.</h4>
        <h4>Have you ever had trouble choosing a restaurant? Do you find yourself asking, &quot;Where should we eat tonight?&quot; Use the Let&apos;s Eat feature! The Let&apos;s Eat randomizer goes through your added restaurants and selects one at random!</h4>
        {user
          ? <h4 className="mb-3">To get started, please add restaurants and hit the Let&apos;s Eat button!</h4>
          : <h4 className="mb-3">To get started, please log in.</h4>
        }
      </Container>
    </>
  );
}

Home.propTypes = {
  user: PropTypes.any
};
