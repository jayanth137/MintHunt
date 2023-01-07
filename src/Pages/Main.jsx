import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';
import ImageSlider from '../Components/ImageSlider';

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Head = styled.div``;
const CardComp = styled.div`
  margin-top: 10vh;
  position: fixed;
  height: fit-content;
`;

const Main = () => {
  return (
    <MainContainer>
      <Head>
        <Header />
      </Head>
      <CardComp>
        <ImageSlider />
      </CardComp>
    </MainContainer>
  );
};

export default Main;
