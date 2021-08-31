import {
  BASE_URL,
  URL_EXTENSIONS,
} from "~/library/common/constants/requestConstants";
import { axiosGet } from "~/main/axios";
import { useQuery } from "react-query";
import { ToDosInterface } from "~/main/interfaces/Todo";

const getTodos = async (id) => {
  return axiosGet(BASE_URL + URL_EXTENSIONS.todos + `/${id}`).then(
    (response) => response.data
  );
};

export const useFetchTodoById = (id) => {
  return useQuery<ToDosInterface, Error>(["todo", id], () => getTodos(id), {
    enabled: !!id,
  });
};
