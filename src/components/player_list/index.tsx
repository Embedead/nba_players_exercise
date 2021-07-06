import React from "react";
import styled from "styled-components";
import { getAllPlayers } from "../../api/basicAPI";
import { PlayerCard } from "../PlayerCard";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  width: 50%;
  background-color: rgba(0, 0, 0, 0.5);
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

const prunePlayerData = (unprunedData: any) => {
  let prunedData = unprunedData.map((item: any) => {
    let player: IPlayer = {
      id: item.id,
      first_name: item.first_name,
      last_name: item.last_name,
      team_name: item.team.full_name,
    };

    return player;
  });

  return prunedData;
};

export const PlayerList = () => {
  const [players, setPlayers] = React.useState<[] | IPlayer[]>([]);
  console.log("players are", players);
  React.useEffect(() => {
    getAllPlayers().then((res) => {
      let prunedPlayers = prunePlayerData(res.data.data);
      setPlayers(prunedPlayers);
    });
  }, []);
  return (
    <ListContainer>
      <ListLabel>All Players</ListLabel>
      {players.length > 0 ? (
        players.map((item, index) => {
          return <PlayerCard key={index} player={item} />;
        })
      ) : (
        <CautionMessage>No players found</CautionMessage>
      )}
    </ListContainer>
  );
};
