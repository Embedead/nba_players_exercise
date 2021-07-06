import React from "react";
import styled from "styled-components";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

interface IProps {
  player: IPlayer;
  favorited: boolean;
  favorites: any[];
  setFavorites: (favorites: any[]) => void;
}

const PlayerContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  border-top: 1px solid white;
  color: white;
  font-weight: 600;
  font-size: 18px;
`;

const PlayerRow = styled.span`
  display: flex;
  flex-grow: 1;
  align-items: center;
  /* padding: 0.25rem; */
`;

const PlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 75%; */
  flex-grow: 1;
  align-items: flex-start;
`;

const FavoriteCard = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 42px;
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const handleAddToFavorites = (
  favorites: any[],
  setFavorites: any,
  player: IPlayer
) => {
  let tempFavorites = [...favorites];
  let isIncluded = tempFavorites.includes(player);
  if (!isIncluded) {
    tempFavorites.push(player);
    setFavorites(tempFavorites);
  } else {
    console.log("already in favorites");
  }
};

const handleRemoveFromFavorites = (
  favorites: any[],
  setFavorites: any,
  player: IPlayer
) => {
  let tempFavorites = favorites.filter((item) => item !== player);
  setFavorites(tempFavorites);
};

const handleAction = (
  favorites: any[],
  setFavorites: any,
  player: IPlayer,
  favorited: boolean
) => {
  if (favorited) {
    handleRemoveFromFavorites(favorites, setFavorites, player);
  } else {
    handleAddToFavorites(favorites, setFavorites, player);
  }
};

export const PlayerCard = ({
  player,
  favorited,
  favorites,
  setFavorites,
}: IProps) => {
  return (
    <PlayerContainer>
      <PlayerInfo>
        <PlayerRow>
          <label>
            Name: {player.last_name} {player.first_name}
          </label>
        </PlayerRow>
        <label>Team: {player.team_name}</label>
      </PlayerInfo>
      <FavoriteCard
        onClick={() => handleAction(favorites, setFavorites, player, favorited)}
      >
        {favorited ? <MdFavorite /> : <MdFavoriteBorder />}
      </FavoriteCard>
    </PlayerContainer>
  );
};
