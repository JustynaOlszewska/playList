const apiURL = `${process.env.REACT_APP_API_SERVER}/${process.env.REACT_APP_GITHUB_ACOUNT}`;

const authorActions = async (url, method, data) => {
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

export const getAllAuthors = () => {
  return authorActions(`${apiURL}-authors`, "GET");
};

export const removeAuthor = (id) => {
  return authorActions(`${apiURL}-authors/${id}`, "DELETE");
};

export const addAuthor = (data) => {
  return authorActions(`${apiURL}-authors`, "POST", data);
};

export const updateAuthor = ({ id, ...data }) => {
  return authorActions(`${apiURL}-authors/${id}`, "PUT", data);
};

export const getAuthor = ({ queryKey }) => {
  /*eslint-disable no-unused-vars*/
  const [_key, { id }] = queryKey;
  return authorActions(`${apiURL}-authors/${id}`, "GET");
};
