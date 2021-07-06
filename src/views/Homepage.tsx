import React from "react";
import styled from "styled-components";
import { FavoritesList } from "../components/favorites_list";
import { PlayerList } from "../components/player_list/index";
import { NbaHeader } from "../components/header";

const HomepageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #1d4289;
  overflow: auto;
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
`;

const HomepageRow = styled.div`
  display: flex;
  width: 100%;
  align-items: baseline;
  justify-content: center;
`;

export const Homepage = () => {
  const [favorites, setFavorites] = React.useState<[] | IPlayer[]>([]);

  return (
    <HomepageContainer>
      <HomepageRow>
        <NbaHeader />
      </HomepageRow>
      <HomepageRow>
        <PlayerList favorites={favorites} setFavorites={setFavorites} />
        <FavoritesList favorites={favorites} setFavorites={setFavorites} />
      </HomepageRow>
    </HomepageContainer>
  );
};
