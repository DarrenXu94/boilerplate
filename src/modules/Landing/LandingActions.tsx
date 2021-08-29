import {
  BASE_URL,
  PAGE_SIZE,
  URL_EXTENSIONS,
} from "~/library/common/constants/requestConstants";
import { axiosGet } from "~/main/axios";
import { useQuery } from "react-query";

const getTodos = async (pageNumber) => {
  return axiosGet(BASE_URL + URL_EXTENSIONS.todos).then((response) =>
    response.data.slice((pageNumber - 1) * PAGE_SIZE, pageNumber * PAGE_SIZE)
  );
};

export const useFetchTodos = ({ pageNumber }) => {
  return useQuery<any, Error>(["todos", pageNumber], () =>
    getTodos(pageNumber)
  );
};
