import { Link } from 'react-router-dom';
import { selectMovies } from '../../app/reducers/movieReducer';
import { useAppSelector } from '../../hooks';
import { Container, Content, Wrap } from './styles';

const Movies = () => {
  const movies = useAppSelector(selectMovies);

  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        {movies &&
          movies.map((movie) => (
            <Wrap key={movie.id}>
              <Link to={`/detail/${movie.id}`}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

export default Movies;
