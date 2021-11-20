import React from "react";
import styled from "styled-components";

export const LogoComponent = () => {
  const Logo = styled.span`
    display: inline-block;
    color: ${(props) => props.theme.text};
    position: fixed;
    left: 2rem;
    top: 2rem;
    font-family: 'Permanent Marker', cursive;
    font-size: 2.0rem;
    z-index: 3;
  `;
  return (
    <React.Fragment>
      <Logo>Anand</Logo>
    </React.Fragment>
  );
};
