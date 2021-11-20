import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "../../node_modules/react-router-dom";
import HomeButton from "../subComponents/HomeButton";
import { LogoComponent } from "../subComponents/LogoComponent";
import { SocialIcons } from "../subComponents/SocialIcons";
import { YinYang } from "../components/AllSvgs";
// import yin from "../assets/yin.png";

const HomeContainer = styled.div`
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-size: 17px;
`;

const Container = styled.div`
  padding: 2rem;
`;

const Contact = styled.div`
  color: ${(props) => props.theme.text};
  right: calc(1rem + 2vw);
  top: 2rem;
  text-decoration: none;

  position: fixed;
  z-index: 1;
`;

const Blog = styled.div`
  color: ${(props) => props.theme.text};
  top: 50%;
  right: calc(1rem + 2vw);
  /* TODO: CHECK this CALC */
  position: fixed;
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;

  z-index: 1;
`;

const Work = styled.div`
  color: ${(props) => props.theme.text};
  top: 50%;
  left: calc(1rem + 2vw);
  /* TODO: CHECK this CALC */
  position: absolute;
  transform: translate(-50%, -50%) rotate(-90deg);
  align-items: center;

  z-index: 1;
`;

const Footer = styled.div`
  bottom: 2rem;
  display: flex;
  text-decoration: none;
  width: 100%;
  justify-content: space-evenly;
  font-size: larger;

  position: absolute;
`;
const About = styled.div`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;
const Skills = styled.div`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to{ 
    transform: rotate(360deg);
  }
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  background: transparent;
  cursor: pointer;
  align-items: center;

  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 2.5s linear;
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const Home = ({ props }) => {
  // console.log(HomeContainer.componentStyle.rules[3]);
  const [click, setClick] = useState(false);

  return (
    <HomeContainer>
      <Container>
        <Link to="/">
          <HomeButton fill="currentColor" />
        </Link>
        <LogoComponent />

        <Center click={click}>
          {/* <img style={{width: "150px", height: "150px"}} src={yin} alt="" srcset="" /> */}
          <YinYang
            onClick={() => setClick(!click)}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          />
          <span>Click Here</span>
        </Center>

        <Contact>
          <h3>
            <a
              style={{ color: "inherit", textDecoration: "none" }}
              href="mailto:anandbale11@gmail.com"
            >
              Say Hi..
            </a>
          </h3>
        </Contact>

        {/* Blog Cokmponent */}
        <Link to="/blog">
          <Blog>
            <h3>Blog</h3>
          </Blog>
        </Link>

        {/* Work Component */}
        <Link to="/mywork">
          <Work>
            <h3>Work</h3>
          </Work>
        </Link>

        {/* Social Icons */}
        <SocialIcons />

        {/* Footer */}
        <Footer>
          <Link to="/about">
            <About>
              <h3>About</h3>
            </About>
          </Link>

          <Link to="/skills">
            <Skills>
              <h3>My Skills</h3>
            </Skills>
          </Link>
        </Footer>
      </Container>
    </HomeContainer>
  );
};

export default Home;
