import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getRestaurants = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/restaurants.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => {
      if (response.data) {
        const restaurantArray = Object.values(response.data);
        resolve(restaurantArray);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const addRestaurant = (restaurantObject, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/restaurants.json`, restaurantObject)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/restaurants/${response.data.name}.json`, body)
        .then(() => {
          getRestaurants(uid).then((restaurantArray) => resolve(restaurantArray));
        });
    }).catch((error) => reject(error));
});

export {
  getRestaurants, addRestaurant
};
