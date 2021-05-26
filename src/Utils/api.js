import axios from 'axios';

const gamesApi = axios.create({
  baseURL: 'https://elijaharley-games.herokuapp.com/api'
});

export const getCategories = async () => {
  const { data } = await gamesApi.get('/categories');
  return data.categories;
};

export const getSingleCategory = async (category) => {
  const { data } = await gamesApi.get('/categories/category');
  return data.categories;
};

export const getReviews = async () => {
  const { data } = await gamesApi.get('/reviews');
  return data.reviews;
};

export const getReviewsById = async (review_id) => {
  const { data } = await gamesApi.get('/reviews/:review_id');
  return data.reviews;
};

export const getCommentsByReviewId = async (review_id) => {
  const { data } = await gamesApi.get('/reviews/:review_id/comments');
  return data.reviews;
};

export const getUsers = async () => {
  const { data } = await gamesApi.get('users');
  return data.users;
};
