import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import HomeButton from "../subComponents/HomeButton";
import { LogoComponent } from "../subComponents/LogoComponent";
import { SocialIcons } from "../subComponents/SocialIcons";
import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { YinYang } from "../components/AllSvgs";
import BigTitle from "../subComponents/BigTitle";
import { motion } from "framer-motion";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  /* width: 100vw; */
  height: 350vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

// Framer-motion configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};
const MyWork = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      yinyang.current.style.transform =
        `rotate(` + -window.pageYOffset + `deg)`;
    };

    window.addEventListener("scroll", rotate);

    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <HomeButton />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </Main>
        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={darkTheme.text} />
        </Rotate>

        <BigTitle text="WORK" top="17%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default MyWork;
