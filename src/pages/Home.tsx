import {type ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchShows } from '../store/showsThunks';
import { selectShows } from '../store/showsSlice';

const Home = () => {
  const dispatch = useAppDispatch();
  const shows = useAppSelector(selectShows);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(fetchShows(e.target.value));
  };

  return (
    <>
      <h1>TV Shows</h1>

      <input
        type="text"
        placeholder="Search for TV Show"
        onChange={onChange}
      />

      {shows.length > 0 && (
        <div className="autocomplete">
          {shows.map(show => (
            <div key={show.id} className="autocomplete-item">
              <Link to={`/shows/${show.id}`}>{show.name}</Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Home;
