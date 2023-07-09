import axios from 'axios'

export const getProducts = (callback) => {
  axios.get("https://api.escuelajs.co/api/v1/products").then((res) => {
    callback(res.data);
  }).catch((err) => {
    console.log(err);
  });
}