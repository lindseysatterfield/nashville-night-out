import React from 'react';
import getYelpRestaurantInfo from '../Yelp/YelpData';

export default function Search() {
  getYelpRestaurantInfo('american').then((response) => console.warn(response));

  return (
    <>
     <h1>Dining Inspiration</h1>
    </>
  );
}
