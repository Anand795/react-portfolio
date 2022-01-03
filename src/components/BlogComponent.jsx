import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Box = styled.div`
  text-decoration: none;
  width: calc(10rem + 15vw);
  height: 20rem;
  padding: 1rem;
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 1.5%;
  backdrop-filter: blur(2px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  cursor: pointer;

  display: flex;
  flex-direction: column;
  z-index: 5;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
    transition: all 0.3s ease;
  }

  /* background-color: aqua; */
  /* & > :first-child {
    text-decoration: none;
    color: ${(props) => props.theme.text};
  } */
`;

const Image = styled.div`
  background-image: ${(props) => `url(${props.img})`};
  width: 100%;
  height: 60%;
  background-size: cover;
  border: 1px solid transparent;
  background-position: center center;

  ${Box}:hover & {
    border: 1px solid ${(props) => props.theme.body};
  }
`;

const Title = styled.div`
  color: inherit;
  padding: 0.5rem 0;
  padding-top: 1rem;
  font-family: "Courier New", Courier, monospace;
  font-weight: 700;
  border-bottom: 1px solid ${(props) => props.theme.text};
  text-decoration: none;

  ${Box}:hover & {
    border-bottom: 1px solid ${(props) => props.theme.body};
  }
`;

const HashTags = styled.div`
  padding: 0.5rem 0;
`;

const Tag = styled.span`
  padding-right: 0.5rem;
  font-family: "Courier New", Courier, monospace;
`;

const Date = styled.span`
  padding: 0.5rem 0;
`;

const Container = styled(motion.div)``;

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

export const BlogComponent = (props) => {
  const { name, tags, date, imgSrc, link } = props.blog;

  return (
    // TODO: Fix the routing issue - FIXED
    <Container variants={item}>
      <a
        style={{ textDecoration: "none" }}
        href={link}
        rel="noreferrer"
        target="_blank"
      >
        <Box>
          {/* <a href={link} target="_blank" rel="noreferrer"> */}
          {/* Blog Item */}
          <Image img={imgSrc} />
          <Title>{name}</Title>
          <HashTags>
            {tags.map((tag, id) => {
              return <Tag key={id}>#{tag}</Tag>;
            })}
          </HashTags>
          <Date>{date}</Date>
          {/* </a> */}
        </Box>
      </a>
    </Container>
  );
};

// export default BlogComponent;
