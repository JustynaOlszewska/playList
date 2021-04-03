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
  return authorActions(
    `${process.env.REACT_APP_API_SERVER}/justyna-olszewska-authors`,
    "GET"
  );
};

export const removeAuthor = (id) => {
  return authorActions(
    `${process.env.REACT_APP_API_SERVER}/justyna-olszewska-authors/${id}`,
    "DELETE"
  );
};

export const addAuthor = (data) => {
  return authorActions(
    `${process.env.REACT_APP_API_SERVER}/justyna-olszewska-authors`,
    "POST",
    data
  );
};

export const updateAuthor = ({ id, ...data }) => {
  return authorActions(
    `${process.env.REACT_APP_API_SERVER}/justyna-olszewska-authors/${id}`,
    "PUT",
    data
  );
};

export const getAuthor = ({ queryKey }) => {
  /*eslint-disable no-unused-vars*/
  const [_key, { id }] = queryKey;
  return authorActions(
    `${process.env.REACT_APP_API_SERVER}/justyna-olszewska-authors/${id}`,
    "GET"
  );
};
