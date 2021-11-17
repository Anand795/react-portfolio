import React from "react";
import styled from "styled-components";
import {  PowerIcon } from "../components/AllSvgs";

const Home = styled.button`
  position: fixed;
  background: transparent;
  border-radius: 50%;
  border: 1px solid black;
  cursor: pointer;
  left: 50%;
  top: 2rem;
  /* transform: translate(-50%, -50%); */
  /* padding: 5px; */
  width: 2.2rem;
  height: 2.2rem;

  display: flex;
  z-index: 3;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px #ffee10;
    /* background-color: #ffee10; */
  }
`;

const HomeButton = () => {
  return (
    <Home>
      {/* <HomeIcon fill="currentColor" /> */}
      <PowerIcon />
    </Home>
  );
};

export default HomeButton;
