import { useMutation, useQueryClient } from "react-query";
import { useSnackbar } from "notistack";

export const usePlayList = (
  addPlayList,
  reset,
  playList,
  changeStatusItems
) => {
  const { enqueueSnackbar } = useSnackbar();

  const queryClient = useQueryClient();

  const { mutateAsync, isLoading } = useMutation(addPlayList);

  const onSubmit = (data) => {
    if (playList.length !== 0) {
      const songs = playList.map((element) => element.id);
      onFormSubmit(data, songs);
      changeStatusItems();
      reset();
    } else {
      enqueueSnackbar("Your playlist is empty");
    }
  };

  const onFormSubmit = async (data, songs) => {
    const { name } = data || {};
    await mutateAsync({ name, songs });
    queryClient.invalidateQueries("playlists");
  };

  return { onSubmit, isLoading };
};
