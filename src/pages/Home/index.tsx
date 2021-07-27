import React from 'react';
import ImgSlider from '../../components/ImgSlider';
import Movies from '../../components/Movies';
import Viewers from '../../components/Viewers';
import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
};

export default Home;
