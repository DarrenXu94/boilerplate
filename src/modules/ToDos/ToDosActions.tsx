import {
  BASE_URL,
  URL_EXTENSIONS,
} from "~/library/common/constants/requestConstants";
import { axiosGet } from "~/main/axios";
import { useQuery } from "react-query";
import { ToDosInterface } from "~/main/interfaces/Todo";

const getTodos = async () => {
  return axiosGet(BASE_URL + URL_EXTENSIONS.todos).then(
    (response) => response.data
  );
};

export const useFetchTodos = () => {
  return useQuery<ToDosInterface[], Error>(["todos"], () => getTodos());
};
