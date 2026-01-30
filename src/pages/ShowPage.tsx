import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchShowById } from '../store/showsThunks';
import { selectSelectedShow } from '../store/showsSlice';
import SearchBar from '../components/SearchBar';

const ShowPage = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const show = useAppSelector(selectSelectedShow);

  useEffect(() => {
    if (id) {
      dispatch(fetchShowById(id));
    }
  }, [dispatch, id]);

  if (!show) return null;

  return (
    <>
    
      <SearchBar />

      <h2>{show.name}</h2>
      {show.image && <img src={show.image.medium} />}
      <div dangerouslySetInnerHTML={{ __html: show.summary }} />
    </>
  );
};

export default ShowPage;
