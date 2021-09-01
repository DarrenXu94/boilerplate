import { useQuery } from "react-query";
import {
  BASE_URL,
  URL_EXTENSIONS,
} from "~/library/common/constants/requestConstants";
import { axiosGet } from "~/main/axios";
import { UserInterface } from "~/main/interfaces/User";

const getUsers = async () => {
  return axiosGet(BASE_URL + URL_EXTENSIONS.users).then(
    (response) => response.data
  );
};

export const useFetchUsers = () => {
  return useQuery<UserInterface[], Error>(["users"], () => getUsers());
};
