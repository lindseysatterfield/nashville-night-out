import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './views/Home';
import LetsEat from './views/LetsEat';
import AddRestaurant from './views/AddRestaurant';
import Favorites from './views/Favorites';
import AllRestaurants from './views/AllRestaurants';

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

function Routes({ user }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <PrivateRoute
          exact path='/lets-eat'
          user={user}
          component={LetsEat}
        />
        <PrivateRoute
          exact path='/add-restaurant'
          user={user}
          component={AddRestaurant}
        />
        <PrivateRoute
          exact path='/favorites'
          user={user}
          component={Favorites}
        />
        <PrivateRoute
          exact path='/all-restaurants'
          user={user}
          component={AllRestaurants}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any
};

export default Routes;
