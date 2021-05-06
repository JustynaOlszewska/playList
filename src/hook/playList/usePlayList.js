import { useMutation, useQueryClient } from "react-query";
import { useSnackbar } from "notistack";

export const usePlayList = (
  actionApiPlayList,
  playList,
  changeStatusItems,
  reset = null,
  dataGetPlayListId = null,
  id = null
) => {
  const { enqueueSnackbar } = useSnackbar();

  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(actionApiPlayList);

  const onSubmit = (data) => {
    if (playList.length !== 0) {
      const copydataGetPlayListId = JSON.parse(
        JSON.stringify(dataGetPlayListId)
      );
      const songs = copydataGetPlayListId
        ? [
            ...copydataGetPlayListId.songs.map((e) => e.id),
            ...playList.map((element) => element.id),
          ]
        : playList.map((element) => element.id);
      onFormSubmit(data, songs);
      changeStatusItems();
      reset !== null && reset();
    } else {
      enqueueSnackbar("Your playlist is empty");
    }
  };

  const onFormSubmit = async (data, songs) => {
    const { name } = data || {};
    await mutateAsync(id ? { name, songs, id } : { name, songs });
    queryClient.invalidateQueries("playlists");
  };

  return { onSubmit, isLoading };
};
