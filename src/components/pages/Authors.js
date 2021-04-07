import React, { lazy } from "react";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
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
      <Error isError={isError} massage={error?.message} />
    </StyledListAuthors>
  );
};

export default Authors;
