import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ReviewsContainer } from './Reviews.styled';
import Loader from 'components/Loader/Loader';
import { fetchMovieReviews } from 'services/image-service';
import Text from 'components/Text/Text.styled';

const Reviews = () => {
  const { movieId } = useParams('movieId');
  const [reviews, setReviews] = useState([]);
  const [onError, setOnError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchReviews = async () => {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        setOnError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchReviews();
  }, [movieId]);

  return (
    <ReviewsContainer>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Ther is nothing found</p>
      )}
      {isLoading && <Loader />}
      {onError && <Text textAlign="center">{onError}</Text>}
    </ReviewsContainer>
  );
};

export default Reviews;
