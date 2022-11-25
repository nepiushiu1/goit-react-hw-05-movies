import { getCast } from '../../api/Api';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const movieId = useOutletContext();

  useEffect(() => {
    try {
      getCast(movieId).then(response => {
        setCast(response.cast);
      });
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  const img = 'https://image.tmdb.org/t/p/w200';
  const imageMissing =
    'https://houseofzayn.co.nz/wp-content/uploads/2019/08/nopicture.gif';

  return (
    <div>
      {/* {!cast.length && <Message>Sorry! Information not found</Message>} */}
      <ul>
        {cast.map(({ id, original_name, profile_path }) => {
          return (
            <li key={id}>
              <img
                src={profile_path ? `${img}${profile_path}` : `${imageMissing}`}
                alt={original_name}
              />
              <p>{original_name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
