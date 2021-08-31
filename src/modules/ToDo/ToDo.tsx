import React from "react";
import { useParams } from "react-router-dom";
import { useFetchTodoById } from "./ToDoActions";

export interface TodoProps {}

export default function Todo({}: TodoProps) {
  let { id } = useParams<{ id: string }>();

  console.log({ id });

  const { data, isLoading } = useFetchTodoById(id);

  if (isLoading) return <>Loading</>;

  return (
    <div>
      <h1>To do</h1>
      {data && <div>{data.title}</div>}
    </div>
  );
}
