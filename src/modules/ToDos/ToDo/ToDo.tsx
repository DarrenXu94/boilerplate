import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchUserById } from "~/main/queries/UserActionts";
import { useFetchTodoById } from "../ToDosActions";

export interface TodoProps {}

export default function Todo({}: TodoProps) {
  let { id } = useParams<{ id: string }>();

  const { data, isLoading } = useFetchTodoById(id);
  const { data: userData, isLoading: userIsLoading } = useFetchUserById(
    data && data.id
  );

  if (isLoading || userIsLoading) return <>Loading</>;

  return (
    <div>
      <h1>To do</h1>
      {data && <div>{data.title}</div>}
      {userData && <Link to={`/user/${userData.id}`}>{userData.name}</Link>}
    </div>
  );
}
