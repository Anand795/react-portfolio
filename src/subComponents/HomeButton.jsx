import React from "react";
import styled from "styled-components";
import { PowerIcon } from "../components/AllSvgs";
import { Link } from "react-router-dom";

const Home = styled.button`
  /* TODO: Finilize the colors  */
  position: fixed;
  background: #FCF6F4;
  border-radius: 50%;
  border: 1px solid black;
  cursor: pointer;
  left: 50%;
  top: 2rem;
  /* transform: translate(-50%, 0)  scale(1.1);; */
  transform: translate(-50%, 0) scale(1.1);
  /* transform: translate(-50%, -50%); */
  /* padding: 5px; */
  width: 2.2rem;
  height: 2.2rem;

  display: flex;
  z-index: 3;
  align-items: center;
  justify-content: center;

  &:hover {
    /* transform: scale(1.1); */
    box-shadow: 0 0 15px #ffee10;
    background-color: #f7f5a2;
  }
`;

const HomeButton = () => {
  return (
    <Link to="/">
      <Home>
        {/* <HomeIcon fill="currentColor" /> */}
        <PowerIcon />
      </Home>
    </Link>
  );
};

export default HomeButton;
