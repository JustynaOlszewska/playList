import React from "react";
import { NavLink } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import PropTypes from "prop-types";
import { removeAuthor } from "../../../api/apiAuthors";

const Author = ({ author }) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(removeAuthor);

  const { name, id } = author;

  const remove = async () => {
    await mutateAsync(id);
    queryClient.invalidateQueries("authors");
  };

  return (
    <li>
      <NavLink to={`/updateAuthors/${id}`}>{name}</NavLink>
      <button onClick={remove}>{isLoading ? "wait..." : "Delete"}</button>
    </li>
  );
};

Author.propTypes = {
  author: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
  }),
};

export default Author;
