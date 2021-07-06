import React from "react";
import styled from "styled-components";
import nbalogo from "../../images/nbalogo.png";

const HeaderContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  align-items: center;
  height: 3rem;
  background-color: black;
  flex-grow: 1;
  label {
    color: white;
    font-size: 26px;
  }
  img {
    height: 3rem;
    width: auto;
  }
`;

export const NbaHeader = () => {
  return (
    <HeaderContainer>
      <img src={nbalogo} alt="nba-logo" />
      <label>NBA</label>
    </HeaderContainer>
  );
};
