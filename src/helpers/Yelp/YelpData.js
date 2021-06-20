import axios from 'axios';
import { YelpConfig } from '../apiKeys';

const dbUrl = YelpConfig.databaseURL;
const yelpKey = YelpConfig.YelpApiKey;
const cors = 'https://cors-anywhere.herokuapp.com/';

const getYelpRestaurantInfo = () => new Promise((resolve, reject) => {
  axios.get(`${cors}${dbUrl}businesses/search?term=japanese&location=nashville&limit=5`, {
    headers: {
      Authorization: `Bearer ${yelpKey}`,
      'Content-type': 'application/json'
    }
  })
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getYelpRestaurantInfo;
