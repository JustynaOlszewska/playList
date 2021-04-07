import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";

export const useFormAuthors = (add, path, id = null) => {
  const { mutateAsync, isLoading } = useMutation(add);

  const history = useHistory();

  const onFormSubmit = async (data) => {
    await mutateAsync(id ? { ...data, id } : data);
    history.push(path);
  };

  return { onFormSubmit, isLoading };
};
