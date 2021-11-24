import React from "react";
import styled from "styled-components";
import Profile from "../assets/p.png";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 65vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-size: 100% 2px;
  background-repeat: no-repeat;

  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;
`;

const SubDiv = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 100%;
    height: auto;
  }
`;
// TODO: Learn linear gradient property
const Text = styled.span`
  color: ${(props) => props.theme.body};
  font-size: calc(1rem + 1.5vw);
  padding: 2rem;
  font-family: "Architects Daughter", cursive;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    font-size: calc(0.5rem + 1.5vw);
  }
`;

const Intro = () => {
  return (
    <React.Fragment>
      <Box
        initial={{ height: 0 }}
        animate={{ height: "55vh" }}
        transition={{ type: "spring", duration: 2, delay: 1 }}
      >
        <SubDiv>
          <Text>
            <h1> Hi, </h1>
            <h3>This is Anand</h3>
            <span>Knack of building applications with fronted and backend operations</span>
          </Text>
        </SubDiv>

        <SubDiv>
          <div>
            {/* Replace the image */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <img className="pic" src={Profile} alt="Profile Pic" />
            </motion.div>
          </div>
        </SubDiv>
      </Box>
    </React.Fragment>
  );
};

export default Intro;
