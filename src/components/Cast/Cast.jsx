import { getCast } from '../../api/Api';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const movieId = useOutletContext();

  useEffect(() => {
    async function getCredits() {
      try {
        const fetchCast = await getCast(movieId);

        setCast(fetchCast);
      } catch (error) {
        console.log(error);
      }
    }
    getCredits();
  }, [movieId]);
  console.log(cast);
  if (!cast) return null;

  const img = 'https://image.tmdb.org/t/p/w200';
  const imageMissing =
    'https://houseofzayn.co.nz/wp-content/uploads/2019/08/nopicture.gif';

  return (
    <div>
      <ul>
        {cast.map(({ id, original_name, profile_path }) => (
          <li key={id}>
            <img
              src={profile_path ? `${img}${profile_path}` : `${imageMissing}`}
              alt={original_name}
            />
            <p>{original_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
