import { useEffect, useState } from 'react';
import MovieList from 'components/MoviesList/MoviesList';
import { HomeContainer, HomeTitle } from './Home.styled';
import Loader from 'components/Loader/Loader';
import { fetchTrending } from 'services/image-service';
import Text from 'components/Text/Text.styled';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [onError, setOnError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    const fetchMovies = async () => {
      try {
        const trendingMovies = await fetchTrending();
        setMovies(trendingMovies);
      } catch (error) {
        setOnError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <HomeContainer>
      <HomeTitle>Trending today</HomeTitle>
      {isLoading && <Loader />}
      {onError && <Text textAlign="center">{onError}</Text>}
      {movies && <MovieList movies={movies} />}
    </HomeContainer>
  );
};

export default Home;
