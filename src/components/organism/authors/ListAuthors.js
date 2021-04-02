import React, { lazy } from "react";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Spinner from "../../molecules/spinner/Spinner";
const Author = lazy(() => import("../../molecules/authors/Author"));
import { getAllAuthors } from "../../../api/apiAuthors";

const ListAuthors = () => {
  const { data, error, isLoading, isError } = useQuery(
    "authors",
    getAllAuthors
  );
  return (
    <div>
      <Button color="inherit">
        <NavLink to="/addAuthor">Add Author</NavLink>
      </Button>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul>
          {data.map((author) => (
            <Author key={author.id} author={author} id={author.id} />
          ))}
        </ul>
      )}
      {isError && <span>Error: {error.message}</span>}
    </div>
  );
};

export default ListAuthors;
