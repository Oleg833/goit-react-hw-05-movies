import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  CastContainer,
  CastList,
  CastItem,
  Img,
  CastDescr,
  CastName,
  CastChar,
} from './Cast.styled';
import Loader from 'components/Loader/Loader';
import { fetchMovieCredits } from 'services/image-service';

const Cast = () => {
  const { movieId } = useParams('movieId');
  const [credits, setCredits] = useState(null);
  const [onError, setOnError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchCredits = async () => {
      try {
        const data = await fetchMovieCredits(movieId);
        if (data.length === 0) {
          return alert('Ther is nothing found!!!');
        }
        setCredits(data);
      } catch (error) {
        setOnError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCredits();
  }, [movieId]);

  return (
    <CastContainer>
      {credits && (
        <CastList>
          {credits.map(({ id, name, character, poster }) => {
            return (
              <CastItem key={id}>
                <Img
                  src={
                    poster
                      ? `https://image.tmdb.org/t/p/w200/${poster}`
                      : `https://cdn.pixabay.com/photo/2022/03/12/11/15/ukraine-7063987_1280.jpg`
                  }
                  alt={name}
                />
                <CastDescr>
                  <CastName>{name}</CastName>
                  <CastChar>Character: {character}</CastChar>
                </CastDescr>
              </CastItem>
            );
          })}
        </CastList>
      )}
      {isLoading && <Loader />}
      {onError && <p>Something went wrong</p>}
    </CastContainer>
  );
};

export default Cast;
