import React from "react";
import styled from "styled-components";
import { getAllPlayers, getPlayersBySearch } from "../../api/basicAPI";
import { PlayerCard } from "../PlayerCard";
import { Pagination } from "../Pagination";
import { PlayerSearch } from "./PlayerSearch";
import { Loader } from "../misc/Loader";

interface IProps {
  favorites: [] | IPlayer[];
  setFavorites: (newFavorites: [] | IPlayer[]) => void;
}

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  flex-grow: 1;
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

const LoaderContainer = styled.div`
  margin: auto;
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

const handlePlayersSet = (
  setPlayers: any,
  setLoading: any,
  players: [] | IPlayer[]
) => {
  setPlayers(players);
  setLoading(false);
};

export const PlayerList = ({ favorites, setFavorites }: IProps) => {
  const [players, setPlayers] = React.useState<[] | IPlayer[]>([]);
  const [page, setPage] = React.useState<number>(1);
  const [searchPage, setSearchPage] = React.useState<number>(1);
  const [search, setSearch] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    if (search === "") {
      getAllPlayers(page.toString())
        .then((res) => {
          let prunedPlayers = prunePlayerData(res.data.data);
          handlePlayersSet(setPlayers, setIsLoading, prunedPlayers);
        })
        .catch((err) => {
          console.log("no players found, error:", err);
        });
    }
  }, [page, search]);

  React.useEffect(() => {
    setIsLoading(true);
    if (search !== "") {
      setSearchPage(1);
      getPlayersBySearch(search).then((res) => {
        let prunedPlayers = prunePlayerData(res.data.data);
        handlePlayersSet(setPlayers, setIsLoading, prunedPlayers);
      });
    } else {
      setPage(1);
    }
  }, [search]);

  React.useEffect(() => {
    setIsLoading(true);
    if (search !== "") {
      getPlayersBySearch(search, searchPage.toString()).then((res) => {
        let prunedPlayers = prunePlayerData(res.data.data);
        handlePlayersSet(setPlayers, setIsLoading, prunedPlayers);
      });
    }
  }, [searchPage]);

  return (
    <ListContainer>
      <ListLabel>All Players</ListLabel>
      <PlayerSearch phrase={search} setter={setSearch} />
      {isLoading ? (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      ) : players.length > 0 ? (
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
      {search === "" ? (
        <Pagination page={page} pageSetter={setPage} length={players.length} />
      ) : (
        <Pagination
          page={searchPage}
          pageSetter={setSearchPage}
          length={players.length}
        />
      )}
    </ListContainer>
  );
};
