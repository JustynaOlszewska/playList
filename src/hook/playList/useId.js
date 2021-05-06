import { useState } from "react";
import { useQuery } from "react-query";
import { getPlayList } from "../../api/apiPlayList";

export const useId = (data) => {
  const findFirstElement = data.find(({ id }) => id);
  const [id, setIdElement] = useState(findFirstElement.id);

  const {
    data: dataGetPlayListId,
    error: errorPlayList,
    isLoading: isLoadingPlayListId,
    isError: isErrorPlayList,
  } = useQuery(["playlists", { id }], getPlayList);

  return {
    id,
    dataGetPlayListId,
    errorPlayList,
    isLoadingPlayListId,
    isErrorPlayList,
    setIdElement,
  };
};
