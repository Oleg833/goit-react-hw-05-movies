import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '53d5445e8f959aee965448ea492bd06d',
  include_adults: false,
};

export const fetchTrending = async () => {
  const {
    data: { results },
  } = await axios.get(`/trending/all/day?`);
  return results.map(({ id, title, poster_path }) => ({
    id,
    title,
    poster: poster_path,
  }));
};

export const fetchByQuery = async query => {
  const {
    data: { results },
  } = await axios.get(`/search/movie?query=${query}`);
  return results.map(({ id, title, poster_path: poster }) => ({
    id,
    title,
    poster,
  }));
};

export const fetchMovieDetails = async movieId => {
  const {
    data: {
      id,
      poster_path: poster,
      title,
      release_date: releaseYear,
      vote_average: userScore,
      overview,
      genres,
    },
  } = await axios.get(`/movie/${movieId}?`);
  return {
    id,
    poster,
    title,
    releaseYear: new Date(releaseYear).getFullYear(),
    userScore: Math.round(userScore * 10),
    overview,
    genres,
  };
};

export const fetchMovieCredits = async movieId => {
  const {
    data: { cast },
  } = await axios.get(`/movie/${movieId}/credits?`);
  return cast.map(({ id, name, character, profile_path: poster }) => ({
    id,
    name,
    character,
    poster,
  }));
};

export const fetchMovieReviews = async movieId => {
  const {
    data: { results },
  } = await axios.get(`/movie/${movieId}/reviews?`);
  return results.map(({ id, author, content }) => ({
    id,
    author,
    content,
  }));
};
