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
  return authorActions(
    `${process.env.REACT_APP_API_SERVER}/justyna-olszewska-authors`,
    "GET"
  );
};

export const removeSong = (id) => {
  return authorActions(
    `${process.env.REACT_APP_API_SERVER}/justyna-olszewska-authors/${id}`,
    "DELETE"
  );
};

export const addSong = (data) => {
  return authorActions(
    `${process.env.REACT_APP_API_SERVER}/justyna-olszewska-authors`,
    "POST",
    data
  );
};

export const updateSong = ({ id, ...data }) => {
  return authorActions(
    `${process.env.REACT_APP_API_SERVER}/justyna-olszewska-authors/${id}`,
    "PUT",
    data
  );
};

export const getSong = ({ queryKey }) => {
  /*eslint-disable no-unused-vars*/
  const [_key, { id }] = queryKey;
  return authorActions(
    `${process.env.REACT_APP_API_SERVER}/justyna-olszewska-authors/${id}`,
    "GET"
  );
};
