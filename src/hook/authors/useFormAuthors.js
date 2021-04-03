import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";

export const useFormAuthors = (addAuthor, id = null) => {
  const { mutateAsync, isLoading } = useMutation(addAuthor);

  const history = useHistory();

  const onFormSubmit = async (data) => {
    await mutateAsync(id ? { ...data, id } : data);
    history.push("/authors");
  };

  return { onFormSubmit, isLoading };
};
