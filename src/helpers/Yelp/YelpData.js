import axios from 'axios';
import { YelpConfig } from '../apiKeys';

const dbUrl = YelpConfig.databaseURL;
const yelpKey = YelpConfig.apiKey;

// REST
const yelpREST = axios.create({
  dbUrl,
  headers: {
    Authorization: `Bearer ${yelpKey}`,
    'Content-type': 'application/json',
  },
});

const getYelpRestaurantInfo = () => new Promise((resolve, reject) => {
  yelpREST('businesses/search?term=japanese&location=nashville')
    .then((response) => {
      resolve(response);
    })
    .catch((error) => reject(error));
});

export default getYelpRestaurantInfo;
