import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Backend, Frontend } from "../components/AllSvgs";
import HomeButton from "../subComponents/HomeButton";
import { LogoComponent } from "../subComponents/LogoComponent";
import { SocialIcons } from "../subComponents/SocialIcons";
import { ParticleComponent } from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitle";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  /* TODO: justify content: space around not working if router Links is added  */
  /* justify-content: space-evenly; */
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;
  /* TODO: Remove this margin once the link issue is fixed */
  margin: 0 4rem;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: calc(1em + 1vw);

  span {
    margin-left: 0.8rem;
  }
  ${Main}:hover & {
    fill: ${(props) => props.theme.body};
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.5em + 1vw);
  padding: 0.5rem 0;

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

  ul,
  p {
    margin-left: 2rem;
  }

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }
`;

const MySkills = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      {/*       
        <Link to="/">
          <HomeButton fill="currentColor" />
        </Link> */}
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <ParticleComponent theme="light" />
        <HomeButton fill="currentColor" />
        {/* <Link to="/">
          <HomeButton fill="currentColor" />
        </Link> */}
        <Main>
          <Title>
            <Backend width={40} height={40} fill="currentColor" />{" "}
            <span>Backend Developer</span>
          </Title>
          <Description>
            I love to create design which speaks, Keep it clean, minimal and
            simple.
          </Description>
          <Description>
            <strong>I LIKE TO DESIGN</strong>
            <ul>
              <li>Web Design</li>
              <li>Mobile Apps</li>
              <li>TOOLS Figma</li>
              <li>Web Design Mobile Apps</li>
            </ul>
          </Description>
          <Description>
            <strong>TOOLS</strong>
            <ul>
              <li>Figma</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <Frontend width={40} height={40} fill="currentColor" />{" "}
            <span> Frontend Developer</span>
          </Title>
          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>
          <Description>
            <strong>Skills</strong>
            <p>
              Html, Css, Js, React, Redux, Sass, Bootstrap, Tailwind, Firebase
              etc.
            </p>
          </Description>
          <Description>
            <strong>Tools</strong>
            <p>VScode, Github, Codepen etc.</p>
          </Description>
        </Main>
        <BigTitle text="SKILLS" top="85%" right="30%" />
      </Box>
    </ThemeProvider>
  );
};

export default MySkills;
