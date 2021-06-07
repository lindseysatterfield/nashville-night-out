import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
// import 'firebase/auth';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authedUser) => {
      if (authedUser) {
        const userInfoObject = {
          fullName: authedUser.displayName,
          profileImage: authedUser.photoURL,
          uid: authedUser.uid
        };
        setUser(userInfoObject);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className='App'>
      <Router>
        <NavBar user={user} />
        <Routes user={user} />
      </Router>
    </div>
  );
}

export default App;
