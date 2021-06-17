import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ClipLoader from 'react-spinners/ClipLoader';
import { Container, Button } from 'reactstrap';
import face from '../../assets/face.png';
import { getRestaurants } from '../data/RestaurantData';
import RestaurantCard from '../../components/RestaurantCard';

export default function LetsEat({ user }) {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [singleRestaurant, setSingleRestaurant] = useState({});
  const [showRestaurant, setShowRestaurant] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleClick = () => {
    setShowRestaurant(true);
    setSingleRestaurant(allRestaurants[Math.floor(Math.random() * allRestaurants.length)]);
  };

  useEffect(() => {
    getRestaurants(user.uid)
      .then((restaurants) => {
        setAllRestaurants(restaurants);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      {loading
        ? <div className="loading">
            <h1 className="text-center my-3">Let&apos;s Eat Loading...</h1>
            <ClipLoader color="#ffffff" loading={loading} size={150} className="spinner" />
          </div>
        : <>
            {allRestaurants.length === 0
              ? <div className="d-flex flex-column">
                  <h1 className="text-center my-3">You have not added any restaurants to have a place chosen for you!</h1>
                  <img className="face" src={face} alt="Sad face icon" />
                </div>
              : <>
                  <h1 className="my-3 text-center">Let&apos;s Eat!</h1>
                  <h4 className="my-3 text-center">Where should we dine tonight?</h4>
                  <div className="my-3 text-center">
                    {showRestaurant
                      ? <Button onClick={handleClick}>Get another restaurant!</Button>
                      : <Button onClick={handleClick}>Let&apos;s Eat</Button>
                    }
                  </div>
                  {showRestaurant
                    ? <div className="all-restaurants-container">
                        <RestaurantCard
                          key={singleRestaurant.firebaseKey}
                          firebaseKey={singleRestaurant.firebaseKey}
                          image={singleRestaurant.image}
                          name={singleRestaurant.name}
                          websiteLink={singleRestaurant.websiteLink}
                          reservationLink={singleRestaurant.reservationLink}
                          description={singleRestaurant.description}
                          cuisineType={singleRestaurant.cuisineType}
                          neighborhood={singleRestaurant.neighborhood}
                          favorite={singleRestaurant.favorite}
                          visited={singleRestaurant.visited}
                          user={user}
                          viewTitle={'LetsEat'}
                        />
                      </div>
                    : ''
                  }
                </>
              }
          </>
      }
    </Container>
  );
}

LetsEat.propTypes = {
  user: PropTypes.any
};
