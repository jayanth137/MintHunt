import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 10vh;
  width: 100%;
  background-color: #ffffff;
  position: fixed;
  border-bottom: 1px solid Black;
`;
const Wrapper = styled.div`
  margin: 20px;
  display: flex;
  justify-content: flex-start;
`;
const Img = styled.img`
  border-radius: 50px;
  height: 50px;
  width: 50px;
  align-content: center;
`;
const Title = styled.h4`
  flex-grow: 1;
  color: #4b587c;
  font-size: 1.7rem;
  font-family: Arial, sans-serif;
  margin: 10px 0 0 0;
`;

const Ul = styled.ul`
  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  align-items: flex-end;
  flex-grow: 1;
`;
const Li = styled.li`
  list-style-type: none;
  font-size: 1.1rem;
  font-family: Arial, sans-serif;
  color: #4b587c;
  font-weight: 500;
`;

const Button = styled.button`
  padding: 10px 25px;
  box-shadow: 0 0 10px;
  transition: 0.4s;
  &:hover {
    color: white;
    box-shadow: 0 0 20px rgb(32, 129, 226);
    background-color: rgb(32, 129, 226);
  }
`;

function Header() {
  return (
    <Container>
      <Wrapper>
        <Img src={require('../images/Logo.png')} alt="logo" />
        <Title>intHunt</Title>
        <Ul>
          <Li>
            <a href="../Pages/Products">Product</a>
          </Li>
          <Li>Community</Li>
          <Li>Leaderboard</Li>
          <Li>About</Li>
        </Ul>
        <Button>Sign in</Button>
      </Wrapper>
    </Container>
  );
}
export default Header;
