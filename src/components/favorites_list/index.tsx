import React from "react";
import styled from "styled-components";
import { ColorPicker } from "./ColorPicker";
import { PlayerCard } from "../PlayerCard";

interface IProps {
  favorites: any[];
  setFavorites: (array: any[]) => void;
}

interface IListProps {
  background_color: string;
}

const ListContainer = styled.div<IListProps>`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  width: 45%;
  background-color: ${(props) =>
    props.background_color ? props.background_color : "rgba(0, 0, 0, 0.5)"};
  margin: 0.5rem;
`;

const ListLabel = styled.label`
  font-size: 42px;
  font-weight: 700;
  color: white;
  align-self: center;
  justify-self: center;
`;

const CautionMessage = styled.label`
  font-size: 36px;
  font-weight: 700;
  color: white;
  align-self: center;
  justify-self: center;
`;

export const FavoritesList = ({ favorites, setFavorites }: IProps) => {
  const [bgColor, setBgColor] = React.useState("black");

  return (
    <ListContainer background_color={bgColor}>
      <ListLabel>Favorite Players</ListLabel>
      <ColorPicker color={bgColor} setColor={setBgColor} />
      {favorites.length > 0 ? (
        favorites.map((item, index) => {
          return (
            <PlayerCard
              key={index}
              player={item}
              favorited={true}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          );
        })
      ) : (
        <CautionMessage>no favorites yet</CautionMessage>
      )}
    </ListContainer>
  );
};
