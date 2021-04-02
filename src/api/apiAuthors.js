export const getAllAuthors = async () => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_API_SERVER}/justyna-olszewska-authors`
    );
    return res.json();
  } catch (error) {
    throw new Error(`somthing went wrong: ${error}`);
  }
};

export const removeAuthor = async (id) => {
  try {
    await fetch(
      `${process.env.REACT_APP_API_SERVER}/justyna-olszewska-authors/${id}`,
      {
        method: "DELETE",
      }
    );
    return true;
  } catch (error) {
    throw new Error(`somthing went wrong: ${error}`);
  }
};

export const addAuthor = async (data) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/justyna-olszewska-authors`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const da = await response.json();
    return da;
  } catch (error) {
    throw new Error(`somthing went wrong: ${error}`);
  }
};

export const updateAuthor = async ({ id, ...data }) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/justyna-olszewska-authors/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const da = await response.json();
    return da;
  } catch (error) {
    throw new Error(`somthing went wrong: ${error}`);
  }
};

export const getAuthor = async ({ queryKey }) => {
  /*eslint-disable no-unused-vars*/
  const [_key, { id }] = queryKey;
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_SERVER}/justyna-olszewska-authors/${id}`
    );
    return response.json();
  } catch (error) {
    throw new Error(`somthing went wrong: ${error}`);
  }
};
