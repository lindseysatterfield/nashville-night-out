import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';
// import { getRestaurants } from '../helpers/data/RestaurantData';

function App() {
  const [user, setUser] = useState(null);
  // const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authedUser) => {
      if (authedUser) {
        const userInfoObject = {
          fullName: authedUser.displayName,
          profileImage: authedUser.photoURL,
          uid: authedUser.uid
        };
        setUser(userInfoObject);
        // getRestaurants(authedUser.uid).then((response) => setRestaurants(response));
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className='App'>
      <Router>
        <NavBar user={user} />
        <Routes
          user={user}
          // restaurants={restaurants}
          // setRestaurants={setRestaurants}
        />
      </Router>
    </div>
  );
}

export default App;
