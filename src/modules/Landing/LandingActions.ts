import {
  BASE_URL,
  URL_EXTENSIONS,
} from "~/library/common/constants/requestConstants";
import { axiosGet } from "~/main/axios";

export const fetchTodos = async () => {
  console.log("Fetching todos");
  const res = await axiosGet(BASE_URL + URL_EXTENSIONS.todos);
  console.log(res);
  // Do all the error handling here?
  if (res.status == 200) {
    return res.data;
  }
  throw "Bad request";
};
