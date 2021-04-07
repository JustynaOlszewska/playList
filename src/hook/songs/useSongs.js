import { useMutation, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";

export const useSongs = (taskSongs, reset, allAuthors) => {
  const { id } = useParams();

  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation(taskSongs);

  const onSubmit = (data) => {
    let { author, title, duration } = data;
    const newAuthor = allAuthors.filter((e) => e.name === author);
    onFormSubmit({ title, author: newAuthor[0], duration });
    reset();
  };

  const onFormSubmit = async (data) => {
    await mutateAsync(id ? { ...data, id } : data);
    queryClient.invalidateQueries("songs");
  };

  return { onSubmit };
};
