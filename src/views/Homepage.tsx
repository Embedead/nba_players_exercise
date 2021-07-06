import React from "react";
import styled from "styled-components";
import { FavoritesList } from "../components/favorites_list";
import { PlayerList } from "../components/player_list/index";

const HomepageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #1d4289;
  overflow: auto;
  scroll-behavior: smooth;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Homepage = () => {
  const [favorites, setFavorites] = React.useState<any[]>([]);

  return (
    <HomepageContainer>
      <PlayerList favorites={favorites} setFavorites={setFavorites} />
      <FavoritesList favorites={favorites} setFavorites={setFavorites} />
    </HomepageContainer>
  );
};
