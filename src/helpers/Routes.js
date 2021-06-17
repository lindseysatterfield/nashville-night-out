import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import LetsEat from './views/LetsEat';
import AddRestaurant from './views/AddRestaurant';
import Favorites from './views/Favorites';
import AllRestaurants from './views/AllRestaurants';
import Home from './views/Home';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (taco) => (user
    ? (<Component {...taco} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};

function Routes({ user, setRestaurants }) {
  return (
    <div>
      <Switch>
        <Route
          exact path='/'
          user={user}
          component={() => <Home user={user} />}
        />
        <PrivateRoute
          exact path='/lets-eat'
          user={user}
          component={() => <LetsEat user={user} />}
        />
        <PrivateRoute
          exact path='/add-restaurant'
          user={user}
          component={() => <AddRestaurant user={user} />}
        />
        <PrivateRoute
          exact path='/favorites'
          user={user}
          component={() => <Favorites user={user} setRestaurants={setRestaurants} />}
        />
        <PrivateRoute
          exact path='/all-restaurants'
          user={user}
          component={() => <AllRestaurants user={user} />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  setRestaurants: PropTypes.func
};

export default Routes;
