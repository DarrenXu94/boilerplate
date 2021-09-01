import { useQuery } from "react-query";
import {
  BASE_URL,
  URL_EXTENSIONS,
} from "~/library/common/constants/requestConstants";
import { axiosGet } from "../axios";
import { UserInterface } from "../interfaces/User";
// All requests to do with users

const getUser = async (id) => {
  return axiosGet(BASE_URL + URL_EXTENSIONS.users + `/${id}`).then(
    (response) => response.data
  );
};

export const useFetchUserById = (id) => {
  return useQuery<UserInterface, Error>(["user", id], () => getUser(id), {
    enabled: !!id,
  });
};
