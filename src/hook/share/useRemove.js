import { useMutation, useQueryClient } from "react-query";

export const useRemove = (source, id, target) => {
  const queryClient = useQueryClient();
  const { mutateAsync, isLoading } = useMutation(source);
  const remove = async () => {
    await mutateAsync(id);
    queryClient.invalidateQueries(target);
  };
  return [remove, isLoading];
};
