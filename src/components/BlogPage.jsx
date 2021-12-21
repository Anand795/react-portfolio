import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HomeButton from "../subComponents/HomeButton";
import img from "../assets/blogs/backgroundimg.jpg";
import { LogoComponent } from "../subComponents/LogoComponent";
import { SocialIcons } from "../subComponents/SocialIcons";
import { BlogComponent } from "./BlogComponent";
import { Blogs } from "../data/BlogData";
import AnchorComponent from "../subComponents/AnchorComponent";

const MainContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  /* width: 100vw; */
  /* height: auto; */
`;

const Container = styled.div`
  // TODO: Add background-color of RGBA from the props  :
  background-color: rgba(255, 255, 117, 0.7);
  width: 100vw;
  height: auto;
  position: relative;
  padding-bottom: 5rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw);
`;

const BlogPage = () => {
  const [numbers, setNumbers] = useState(0);

  useEffect(() => {
    let num = (window.innerHeight - 70) / 30;
    setNumbers(parseInt(num));
    console.log('test');
  }, []);

  return (
    <MainContainer>
      <Container>
        <Link to="/">
          <HomeButton fill="currentColor" />
        </Link>
        <LogoComponent />
        <SocialIcons />
        <AnchorComponent numbers={numbers} />

        <Center>
          <Grid>
            {Blogs.map((blog) => {
              return <BlogComponent key={blog.id} blog={blog} />;
            })}
          </Grid>
        </Center>
      </Container>
    </MainContainer>
  );
};

export default BlogPage;
