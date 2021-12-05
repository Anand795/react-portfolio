import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "../../node_modules/react-router-dom";
import HomeButton from "../subComponents/HomeButton";
import { LogoComponent } from "../subComponents/LogoComponent";
import { SocialIcons } from "../subComponents/SocialIcons";
import { YinYang } from "../components/AllSvgs";
import Intro from "../components/Intro";
import { motion } from "framer-motion";
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
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  top: 50%;
  left: calc(1rem + 2vw);
  /* TODO: CHECK this CALC */
  position: absolute;
  transform: translate(-50%, -50%) rotate(-90deg);
  align-items: center;

  z-index: 1;
`;

const About = styled.div`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  position: absolute;
  z-index: 1;
`;
const Skills = styled.div`
  color: ${(props) => props.theme.text};
  text-decoration: none;
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

const rotate = keyframes`
  from{
    transform: rotate(0);
  }
  to{ 
    transform: rotate(360deg);
  }
`;

const Center = styled.button`
  position: fixed;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
  align-items: center;

  display: flex;
  flex-direction: column;
  justify-content: center;

  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  background-color: black;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  right: 50%;
  z-index: 1;
  /* Height 0.5s with ease in......width ease in from 1s after 0.5s delay */
  transition: height 0.5s ease, width 1s ease 0.5s;
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
        <LogoComponent theme={click ? "dark" : "light"} />

        <DarkDiv click={click} />
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
          <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <a
              style={{ color: "inherit", textDecoration: "none" }}
              href="mailto:anandbale11@gmail.com"
            >
              Say Hi..
            </a>
          </motion.h3>
        </Contact>

        {/* Blog Cokmponent */}
        <Link to="/blogs">
          <Blog>
            <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Blog</motion.h3>
          </Blog>
        </Link>

        {/* Work Component */}
        <Link to="/mywork">
          <Work click={click}>
            <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>Work</motion.h3>
          </Work>
        </Link>

        {/* Social Icons */}
        <SocialIcons theme={click ? "dark" : "light"} />

        {/* Footer */}
        <Footer>
          <Link to="/about">
            <About click={click}>
              <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>About</motion.h3>
            </About>
          </Link>

          <Link to="/skills">
            <Skills>
              <motion.h3 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>My Skills</motion.h3>
            </Skills>
          </Link>
        </Footer>
      </Container>
      {click ? <Intro /> : null}
    </HomeContainer>
  );
};

export default Home;
