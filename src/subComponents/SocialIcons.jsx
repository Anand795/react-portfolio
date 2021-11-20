import React from "react";
import styled from "styled-components";
import { Github, Twitter, LinkedIn, Instagram } from "../components/AllSvgs";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: blue; */

  position: absolute;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.text};
`;

export const SocialIcons = () => {
  return (
    <Icons>
      {/* <Link to="/"> */}
      {/* LinkedIn */}

      <React.Fragment>
        <a target="_blank" href="https://www.linkedin.com/in/anand-s795/" rel="noreferrer">
          <LinkedIn fill="crrentColor" />
        </a>
      </React.Fragment>

      {/* Github */}
      <React.Fragment>
        <a target="_blank" href="https://github.com/Anand795" rel="noreferrer">
          <Github fill="crrentColor" />
        </a>
      </React.Fragment>

      {/* Twitter */}
      <React.Fragment>
        <a target="_blank" href="https://twitter.com/Anand795786" rel="noreferrer">
          <Twitter fill="crrentColor" />
        </a>
      </React.Fragment>

      {/* Instagram */}
      <React.Fragment>
        <a target="_blank" href="https://www.instagram.com/playing_code/" rel="noreferrer">
          <Instagram fill="crrentColor" />
        </a>
      </React.Fragment>

      <Line />
      
    </Icons>
  );
};
