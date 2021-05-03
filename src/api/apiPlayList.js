import { apiActions, apiURL } from "./apiHelper/apiHelper";

export const getAllPlayList = () => {
  return apiActions(`${apiURL}-playlists`, "GET");
};

export const removePlayList = (id) => {
  return apiActions(`${apiURL}-playlists/${id}`, "DELETE");
};

export const addPlayList = (data) => {
  return apiActions(`${apiURL}-playlists`, "POST", data);
};

export const updatePlayList = ({ id, ...data }) => {
  console.log("ww", id, data);

  return apiActions(`${apiURL}-playlists/${id}`, "PUT", data);
};

export const getPlayList = ({ queryKey }) => {
  /*eslint-disable no-unused-vars*/
  const [_key, { id }] = queryKey;
  return apiActions(`${apiURL}-playlists/${id}`, "GET");
};
