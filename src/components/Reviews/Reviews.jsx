import { getReviews } from '../../api/Api';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import PropTypes from 'prop-types';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const movieId = useOutletContext();

  useEffect(() => {
    // async function requestFeedback() {
    try {
      getReviews(movieId).then(r => {
        setReviews(r.results);
      });
    } catch (error) {
      console.log(error);
    }
    //     const fetchReviews = await getReviews(movieId);

    //     setReviews(fetchReviews);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }

    // requestFeedback();
  }, [movieId]);

  console.log(reviews);

  if (!reviews) return null;
  return (
    <div>
      {!reviews.length && <p>Sorry! Information not found</p>}
      <ul>
        {reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h5>author: {author}</h5>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
