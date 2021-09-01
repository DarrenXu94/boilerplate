import {
  BASE_URL,
  URL_EXTENSIONS,
} from "~/library/common/constants/requestConstants";
import { axiosGet } from "~/main/axios";
import { useQuery } from "react-query";
import { ToDosInterface } from "~/main/interfaces/Todo";

// All requests to do with todos
const getTodos = async () => {
  return axiosGet(BASE_URL + URL_EXTENSIONS.todos).then(
    (response) => response.data
  );
};

const getTodo = async (id) => {
  return axiosGet(BASE_URL + URL_EXTENSIONS.todos + `/${id}`).then(
    (response) => response.data
  );
};

export const useFetchTodos = () => {
  return useQuery<ToDosInterface[], Error>(["todos"], () => getTodos());
};

export const useFetchTodoById = (id) => {
  return useQuery<ToDosInterface, Error>(["todo", id], () => getTodo(id), {
    enabled: !!id,
  });
};
