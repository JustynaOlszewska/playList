import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { removeAuthor } from "../../../api/apiAuthors";
import { StyledLi } from "../../../styles/styleComponents/authors/StyledAuthor";
import { useRemove } from "../../../hook/share/useRemove";

const Author = ({ author }) => {
  const { name, id } = author;

  const [remove, isLoading] = useRemove(removeAuthor, id, "authors");

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
