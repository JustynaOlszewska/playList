const apiURL = `${process.env.REACT_APP_API_SERVER}/${process.env.REACT_APP_GITHUB_ACOUNT}`;

const songActions = async (url, method, data) => {
  try {
    const res = await fetch(url, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return method === "DELETE" ? true : res.json();
  } catch (error) {
    throw new Error(`somthing went wrong: ${error}`);
  }
};

export const getAllPlayList = () => {
  return songActions(`${apiURL}-songs`, "GET");
};

export const removePlayList = (id) => {
  return songActions(`${apiURL}-playlists/${id}`, "DELETE");
};

export const addPlayList = (data) => {
  return songActions(`${apiURL}-playlists`, "POST", data);
};

export const updatePlayList = ({ id, ...data }) => {
  return songActions(`${apiURL}-playlists/${id}`, "PUT", data);
};

export const getPlayList = ({ queryKey }) => {
  /*eslint-disable no-unused-vars*/
  const [_key, { id }] = queryKey;
  return songActions(`${apiURL}-playlists/${id}`, "GET");
};
