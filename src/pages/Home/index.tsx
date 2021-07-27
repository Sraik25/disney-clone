import React from 'react';
import ImgSlider from '../../components/ImgSlider';
import Viewers from '../../components/Viewers';
import { Container } from './styles';

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
    </Container>
  );
};

export default Home;
