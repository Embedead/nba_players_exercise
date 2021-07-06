import React from "react";
import styled from "styled-components";
import { PlayerList } from "../components/player_list/index";

const HomepageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #1d4289;
  overflow: auto;
  scroll-behavior: smooth;
`;

export const Homepage = () => {
  const [favorites, setFavorites] = React.useState([]);

  return (
    <HomepageContainer>
      <PlayerList />
    </HomepageContainer>
  );
};
