import axios from 'axios';

const API_KEY = '8a5cfb4207c3746e6a8d5626ceb4bba0';
const BASE_URL = 'https://api.themoviedb.org/3/';

// запрос за популярными фильмами
export const fetchPopularMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );
  return response.data.results;
};

// запрос на информацию о выбраном фильме

export const fetchSelectedFilm = async id => {
  const response = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);
  return response.data;
};

// запрос о поиске фильма по названию

export const fetchSelectedMovieTitle = async query => {
  const response = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
  );
  return response.data;
};

// запрос о актерах выбраного фильма

export const getCast = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

// запрос о отзывах про выбраный фильм

export const getReviews = async id => {
  const response = await axios.get(
    `${BASE_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return response.data;
};
