import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Github, Twitter, LinkedIn, Instagram } from "../components/AllSvgs";
import { darkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: blue; */

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
`;

export const SocialIcons = (props) => {
  return (
    <Icons>
      {/* <Link to="/"> */}
      {/* LinkedIn */}

      <React.Fragment>
        <motion.a
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1 }}
          target="_blank"
          href="https://www.linkedin.com/in/anand-s795/"
          rel="noreferrer"
        >
          <LinkedIn
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </motion.a>
      </React.Fragment>

      {/* Github */}
      <React.Fragment>
        <motion.a
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.2 }}
          target="_blank"
          href="https://github.com/Anand795"
          rel="noreferrer"
        >
          <Github
            width={26}
            height={26}
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </motion.a>
      </React.Fragment>

      {/* Twitter */}
      <React.Fragment>
        <motion.a
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.4 }}
          target="_blank"
          href="https://twitter.com/Anand795786"
          rel="noreferrer"
        >
          <Twitter
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </motion.a>
      </React.Fragment>

      {/* Instagram */}
      <React.Fragment>
        <motion.a
          initial={{ transform: "scale(0)" }}
          animate={{ scale: [0, 1, 1.5, 1] }}
          transition={{ type: "spring", duration: 1, delay: 1.6 }}
          target="_blank"
          href="https://www.instagram.com/playing_code/"
          rel="noreferrer"
        >
          <Instagram
            fill={props.theme === "dark" ? darkTheme.text : darkTheme.body}
          />
        </motion.a>
      </React.Fragment>

      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "8rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};
