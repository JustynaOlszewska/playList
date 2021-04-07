import { apiActions, apiURL } from "./apiHelper/apiHelper";

export const getAllSongs = () => {
  return apiActions(`${apiURL}-songs`, "GET");
};

export const removeSong = (id) => {
  return apiActions(`${apiURL}-songs/${id}`, "DELETE");
};

export const addSong = (data) => {
  return apiActions(`${apiURL}-songs`, "POST", data);
};

export const updateSong = ({ id, ...data }) => {
  return apiActions(`${apiURL}-songs/${id}`, "PUT", data);
};

export const getSong = ({ queryKey }) => {
  /*eslint-disable no-unused-vars*/
  const [_key, { id }] = queryKey;
  return apiActions(`${apiURL}-songs/${id}`, "GET");
};
