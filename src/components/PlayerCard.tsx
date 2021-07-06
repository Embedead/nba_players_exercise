import React from "react";
import styled from "styled-components";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";

interface IProps {
  player: IPlayer;
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
  /* width: 20%; */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 42px;
`;

export const PlayerCard = ({ player }: IProps) => {
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
      <FavoriteCard>
        <MdFavoriteBorder />
      </FavoriteCard>
    </PlayerContainer>
  );
};
