import axios from 'axios';

const API_KEY = '8a5cfb4207c3746e6a8d5626ceb4bba0';
const BASE_URL = 'https://api.themoviedb.org/3/';

// запрос за популярными фильмами
export const fetchPopularMovies = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );
  return response.data;
};
// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>

// запрос на информацию о выбраном фильме

export const fetchSelectedFilm = async movie_id => {
  const response = await axios.get(
    `${BASE_URL}movie/${movie_id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
};

// https://api.themoviedb.org/3/movie/{movie_id}? api_key=<<api_key>>&language=en-US
