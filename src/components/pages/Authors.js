import React, { lazy } from "react";
import { NavLink } from "react-router-dom";
import { useQuery } from "react-query";
import Button from "@material-ui/core/Button";
import { getAllAuthors } from "../../api/apiAuthors";
import {
  StyledListAuthors,
  StyledUl,
} from "../../styles/styleComponents/authors/StyledAuthors";
import Spinner from "../molecules/spinner/Spinner";
const Author = lazy(() => import("../molecules/authors/Author"));
const Error = lazy(() => import("../atom/Error"));

const Authors = () => {
  const { data, error, isLoading, isError } = useQuery(
    "authors",
    getAllAuthors
  );
  const { message: errAuthors } = error || {};

  return (
    <StyledListAuthors>
      <Button color="inherit">
        <NavLink to={`/addAuthor`}>Add Author</NavLink>
      </Button>
      {isLoading ? (
        <Spinner />
      ) : (
        <StyledUl>
          {data.map((author) => (
            <Author key={author.id} author={author} id={author.id} />
          ))}
        </StyledUl>
      )}
      <Error isError={isError} massage={errAuthors} />
    </StyledListAuthors>
  );
};

export default Authors;
