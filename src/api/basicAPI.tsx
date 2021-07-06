import axios from "axios";

const base_url = "https://www.balldontlie.io/api/v1/";

export const getAllPlayers = (page: string = "0", per_page: string = "10") => {
  return axios.get(base_url + "players?page=" + page + "&per_page=" + per_page);
};

export const getPlayersBySearch = (
  playerName: string,
  page: string = "0",
  per_page: string = "10"
) => {
  return axios.get(
    base_url +
      "players?search=" +
      playerName +
      "&page=" +
      page +
      "&per_page=" +
      per_page
  );
};
