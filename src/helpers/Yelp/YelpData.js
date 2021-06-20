import axios from 'axios';
import { YelpConfig } from '../apiKeys';

const dbUrl = YelpConfig.databaseURL; // https://api.yelp.com/v3/
const yelpKey = YelpConfig.YelpApiKey;
const CORS = 'https://cors-anywhere.herokuapp.com/';

// const yelpREST = axios.create({
//   dbUrl,
//   headers: {
//     Authorization: `Bearer ${yelpKey}`,
//     'Content-type': 'application/json',
//   },
// });

// const getYelpRestaurantInfo = () => new Promise((resolve, reject) => {
//   yelpREST('businesses/search?term=japanese&location=nashville&limit=5')
//     .then((response) => {
//       resolve(response);
//     })
//     .catch((error) => reject(error));
// });

const getYelpRestaurantInfo = () => new Promise((resolve, reject) => {
  axios.get(`${CORS}${dbUrl}businesses/search?term=japanese&location=nashville&limit=5`, {
    headers: {
      Authorization: `Bearer ${yelpKey}`,
      'Content-type': 'application/json'
    }
  })
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getYelpRestaurantInfo;
