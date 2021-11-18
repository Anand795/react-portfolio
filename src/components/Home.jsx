import React from "react";
import styled from "styled-components";
import { Link } from "../../node_modules/react-router-dom";
import HomeButton from "../subComponents/HomeButton";
import {  LogoComponent } from "../subComponents/LogoComponent";
import { SocialIcons } from '../subComponents/SocialIcons'

const HomeContainer = styled.div`
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Container = styled.div`
  padding: 2rem;
`;

const Home = (props) => {
  // console.log(props);
  return (
    <HomeContainer>
      <Container>
        <Link to="/">
          <HomeButton fill="currentColor" />
        </Link>
          <LogoComponent />
          <SocialIcons />
      </Container>
    </HomeContainer>
  );
};

export default Home;
