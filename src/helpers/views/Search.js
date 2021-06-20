import React from 'react';
import getYelpRestaurantInfo from '../Yelp/YelpData';

export default function Search() {
  getYelpRestaurantInfo().then((response) => console.warn(response));

  return (
    <div>
      <h1>Search</h1>
    </div>
  );
}
