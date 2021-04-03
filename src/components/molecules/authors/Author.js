import React from "react";
import { NavLink } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { removeAuthor } from "../../../api/apiAuthors";
import { StyledLi } from "../../../styles/styleComponents/StyledAuthor";

const Author = ({ author }) => {
  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(removeAuthor);

  const { name, id } = author;

  const remove = async () => {
    await mutateAsync(id);
    queryClient.invalidateQueries("authors");
  };

  return (
    <StyledLi>
      <NavLink to={`/updateAuthors/${id}`}>{name}</NavLink>
      <Button variant="outlined" color="primary" onClick={remove}>
        {isLoading ? "wait..." : "Delete"}
      </Button>
    </StyledLi>
  );
};

Author.propTypes = {
  author: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
  }),
};

export default Author;
