import { useMutation, useQueryClient } from "react-query";
import { useHistory } from "react-router-dom";

export const useRemove = (source, id, target) => {
  const history = useHistory();

  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(source);
  const remove = async () => {
    history.push("/songs");
    await mutateAsync(id);
    queryClient.invalidateQueries(target);
  };
  return [remove, isLoading];
};
