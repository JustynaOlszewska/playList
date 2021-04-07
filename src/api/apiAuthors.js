import { apiActions, apiURL } from "./apiHelper/apiHelper";

export const getAllAuthors = () => {
  return apiActions(`${apiURL}-authors`, "GET");
};

export const removeAuthor = (id) => {
  return apiActions(`${apiURL}-authors/${id}`, "DELETE");
};

export const addAuthor = (data) => {
  return apiActions(`${apiURL}-authors`, "POST", data);
};

export const updateAuthor = ({ id, ...data }) => {
  return apiActions(`${apiURL}-authors/${id}`, "PUT", data);
};

export const getAuthor = ({ queryKey }) => {
  /*eslint-disable no-unused-vars*/
  const [_key, { id }] = queryKey;
  return apiActions(`${apiURL}-authors/${id}`, "GET");
};
