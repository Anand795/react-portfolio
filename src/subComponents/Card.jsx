import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Github } from "../components/AllSvgs";

const Box = styled(motion.li)`
  width: 16rem;
  height: 40vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  border-radius: 0 50px 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`;

const Description = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-weight: 500;
`;

const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.8rem;
  display: flex;
  flex-wrap: wrap;

  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;

const Tag = styled.span`
  margin-right: 0.5rem;
  font-size: calc(0.8em + 0.3vw);
`;

const Links = styled.button`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.4rem calc(2rem + 1.5vw);
  /* width: 100%;
  padding: 0.45rem; */
  border-radius: 0 0 0 50px;
  font-size: calc(1rem + 0.5vw);
  border: none;

  & > :first-child {
    text-decoration: inherit;
    color: inherit;
  }

  ${Box}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

// const GithubLink = styled.span`
//   color: inherit;
//   text-decoration: none;

//   ${Box}:hover & {
//     & > * {
//       fill: ${(props) => props.theme.text};
//     }
//   }
// `;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

// Framer configurations
const item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const Card = (props) => {
  const { id, name, description, tags, demo, github } = props.data;

  return (
    <Box key={id} variants={item}>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Tags>
        {tags.map((tag, id) => {
          return <Tag key={id}>#{tag}</Tag>;
        })}
      </Tags>

      <Footer>
        <Links>
          <a href={demo} rel="noreferrer" target="_blank">
            Visit
          </a>
        </Links>
        {/* <GithubLink>
          <a href={github} rel="noreferrer" target="_blank">
            <Github width={30} height={30} />
          </a>
        </GithubLink> */}
      </Footer>
    </Box>
  );
};

export default Card;
