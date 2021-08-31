import React from "react";
import { Link } from "react-router-dom";
import { ToDosInterface } from "~/main/interfaces/Todo";

export interface ListOfToDosProps {
  data: ToDosInterface[];
}

export default function ListOfToDos({ data }: ListOfToDosProps) {
  return (
    <div>
      {data.map((todo) => {
        return (
          <div key={todo.id}>
            <Link to={`/todo/${todo.id}`}> {todo.title}</Link>
          </div>
        );
      })}
    </div>
  );
}
