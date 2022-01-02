import React from "react";
import styled from "styled-components";
import { darkTheme } from "../components/Themes";

const Logo = styled.span`
    display: inline-block;
    color: ${(props) =>
      props.color === "dark" ? darkTheme.text : darkTheme.body};
    position: fixed;
    left: 2rem;
    top: 2rem;
    font-family: "Permanent Marker", cursive;
    font-size: 2rem;
    z-index: 3;
  `;

export const LogoComponent = (props) => {
  return (
    <React.Fragment>
      <Logo color={props.theme}>Anand</Logo>
    </React.Fragment>
  );
};
