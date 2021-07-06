import React from "react";
import styled from "styled-components";
import { getAllPlayers, getPlayersBySearch } from "../../api/basicAPI";
import { PlayerCard } from "../PlayerCard";
import { Pagination } from "../Pagination";
import { PlayerSearch } from "./PlayerSearch";

interface IProps {
  favorites: any[];
  setFavorites: (favorites: any[]) => void;
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  width: 45%;
  background-color: rgba(0, 0, 0, 0.5);
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

export const PlayerList = ({ favorites, setFavorites }: IProps) => {
  const [players, setPlayers] = React.useState<[] | IPlayer[]>([]);
  const [page, setPage] = React.useState(1);
  const [search, setSearch] = React.useState<string>("");
  console.log("players are", players);
  React.useEffect(() => {
    if (search === "") {
      getAllPlayers(page.toString())
        .then((res) => {
          let prunedPlayers = prunePlayerData(res.data.data);
          setPlayers(prunedPlayers);
        })
        .catch((err) => {
          console.log("no players found, error:", err);
        });
    } else {
      getPlayersBySearch(search).then((res) => {
        let prunedPlayers = prunePlayerData(res.data.data);
        setPlayers(prunedPlayers);
      });
    }
  }, [page, search]);

  return (
    <ListContainer>
      <ListLabel>All Players</ListLabel>
      <PlayerSearch phrase={search} setter={setSearch} />
      {players.length > 0 ? (
        players.map((item, index) => {
          return (
            <PlayerCard
              key={index}
              player={item}
              favorited={false}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          );
        })
      ) : (
        <CautionMessage>No players found</CautionMessage>
      )}
      {search === "" && <Pagination page={page} pageSetter={setPage} />}
    </ListContainer>
  );
};
