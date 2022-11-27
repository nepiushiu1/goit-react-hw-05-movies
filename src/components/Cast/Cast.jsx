import { getCast } from '../../api/Api';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import PropTypes from 'prop-types';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const movieId = useOutletContext();

  useEffect(() => {
    try {
      getCast(movieId).then(r => {
        setCast(r.cast);
      });
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  console.log(cast);

  if (!cast) return null;

  const img = 'https://image.tmdb.org/t/p/w200';
  const imageMissing = 'https://placehold.jp/200x300.png';

  return (
    <div>
      {!cast.length && <p>Sorry! Information not found</p>}
      <ul>
        {cast.map(({ id, original_name, profile_path, character }) => (
          <li key={id}>
            <img
              src={profile_path ? `${img}${profile_path}` : `${imageMissing}`}
              alt={original_name}
            />
            <p>Name: {original_name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;

Cast.propTypes = {
  id: PropTypes.number.isRequired,
  original_name: PropTypes.string.isRequired,
  profile_path: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};
// async function getCredits() {
//   try {
//     const fetchCast = await getCast(movieId);
//     setCast(fetchCast);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getCredits();
