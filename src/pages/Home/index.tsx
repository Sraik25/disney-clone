import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMoviesAction } from '../../app/actions/moviesAction';
import ImgSlider from '../../components/ImgSlider';
import Movies from '../../components/Movies';
import Viewers from '../../components/Viewers';
import { Container } from './styles';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getMovies = () => {
      dispatch(getMoviesAction());
    };

    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
};

export default Home;
