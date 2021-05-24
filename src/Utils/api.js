import axios from 'axios';

const gamesApi = axios.create({
  baseURL: 'https://elijaharley-games.herokuapp.com/api'
});
