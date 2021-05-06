import React, { lazy } from "react";
import { useQuery } from "react-query";
import { getAllAuthors } from "../../../api/apiAuthors";
import Spinner from "../../molecules/spinner/Spinner";
const FormSongs = lazy(() => import("./FormSongs"));
const Error = lazy(() => import("../../atom/Error"));

const AddSongs = () => {
  const { data, isLoading, error, isError } = useQuery(
    "authors",
    getAllAuthors
  );
  const { message } = error || {};

  return (
    <>
      <div>
        {isLoading ? (
          <Spinner />
        ) : (
          <FormSongs
            type="add"
            isLoading={isLoading}
            allAuthors={data}
            defaultValue=""
          >
            Add Song
          </FormSongs>
        )}
      </div>
      <Error isError={isError} massage={message} />
    </>
  );
};

export default AddSongs;
