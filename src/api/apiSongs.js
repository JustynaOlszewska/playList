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

export const getAllSongs = () => {
  return songActions(`${apiURL}-songs`, "GET");
};

export const removeSong = (id) => {
  return songActions(`${apiURL}-songs/${id}`, "DELETE");
};

export const addSong = (data) => {
  return songActions(`${apiURL}-songs`, "POST", data);
};

export const updateSong = ({ id, ...data }) => {
  return songActions(`${apiURL}-songs/${id}`, "PUT", data);
};

export const getSong = ({ queryKey }) => {
  /*eslint-disable no-unused-vars*/
  const [_key, { id }] = queryKey;
  return songActions(`${apiURL}-songs/${id}`, "GET");
};
