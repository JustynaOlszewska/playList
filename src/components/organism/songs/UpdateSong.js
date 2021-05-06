import React, { lazy } from "react";
import { useQuery } from "react-query";
import { getAllAuthors } from "../../../api/apiAuthors";
import { getSong } from "../../../api/apiSongs";
import { useParams } from "react-router-dom";
import Spinner from "../../molecules/spinner/Spinner";
const FormSongs = lazy(() => import("./FormSongs"));
const Error = lazy(() => import("../../atom/Error"));

const UpdateSongs = () => {
  const { id } = useParams();

  const { data, isLoading, error, isError } = useQuery(
    "authors",
    getAllAuthors
  );

  const {
    data: dataSong,
    error: errorSong,
    isLoading: isLoadingSong,
    isError: isErrorSong,
  } = useQuery(["songs", { id }], getSong);
  const { message: errAuthors } = error || {};
  const { message: errSong } = errorSong || {};

  return (
    <div>
      {isLoading || isLoadingSong ? (
        <Spinner />
      ) : (
        <FormSongs
          type="update"
          defaultValue={dataSong}
          isLoading={isLoading}
          allAuthors={data}
        >
          Update Songs
        </FormSongs>
      )}
      <Error isError={isError || isErrorSong} massage={errAuthors || errSong} />
    </div>
  );
};

export default UpdateSongs;
