import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../../firebase';
import {
  Container,
  Background,
  ImageTitle,
  Controls,
  PlayButton,
  AddButton,
  GroupWatchButton,
  TrailerButton,
  SubTitle,
  Description,
} from './styles';

interface DetailParams {
  id: string;
}
interface Movie {
  backgroundImg: string;
  cardImg: string;
  description: string;
  subTitle: string;
  title: string;
  titleImg: string;
  type: string;
}

const Detail = () => {
  const [movie, setMovie] = useState<any>({} as Movie);
  console.log(movie);

  const { id } = useParams<DetailParams>();

  useEffect(() => {
    db.collection('movies')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setMovie(doc.data());
        } else {
          // redirect
        }
      });
  }, [id]);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} alt={movie.title} />
          </Background>
          <ImageTitle>
            <img src={movie.titleImg} alt={movie.title} />
          </ImageTitle>
          <Controls>
            <PlayButton>
              <img src="/images/play-icon-black.png" alt="" />
              <span>PLAY</span>
            </PlayButton>
            <TrailerButton>
              <img src="/images/play-icon-white.png" alt="" />
              <span>Trailer</span>
            </TrailerButton>
            <AddButton>
              <span>+</span>
            </AddButton>
            <GroupWatchButton>
              <img src="/images/group-icon.png" alt="" />
            </GroupWatchButton>
          </Controls>
          <SubTitle>{movie.subTitle}</SubTitle>
          <Description>{movie.description}</Description>
        </>
      )}
    </Container>
  );
};

export default Detail;
