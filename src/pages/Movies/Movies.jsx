import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import MoviesListComponent from '../../components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import { fetchByQuery } from 'services/image-service';
import SearchForm from 'components/SearchForm/SearchForm';
import Text from 'components/Text/Text.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const [isLoading, setIsLoading] = useState(false);
  const [onError, setOnError] = useState('');

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    setIsLoading(true);
    const fetchData = async () => {
      try {
        if (searchQuery) {
          const response = await fetchByQuery(searchQuery);
          if (response.length === 0) {
            return alert('There is nothing found by your query!');
          }
          setMovies(response);
        }
      } catch (error) {
        setOnError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchParams]);

  const onSubmit = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <SearchForm onSubmit={onSubmit} />
      {isLoading && <Loader />}

      {onError && <Text textAlign="center">{onError}</Text>}
      {movies && <MoviesListComponent movies={movies} />}
    </>
  );
};

export default Movies;
