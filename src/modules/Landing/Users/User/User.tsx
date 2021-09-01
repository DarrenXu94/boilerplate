import React from "react";
import { useParams } from "react-router-dom";
import { useFetchUserById } from "~/main/queries/UserActionts";

export interface UserProps {}

export default function User({}: UserProps) {
  let { id } = useParams<{ id: string }>();

  const { data, isLoading } = useFetchUserById(id);

  if (isLoading) return <>Loading</>;

  return (
    <div>
      {data && (
        <div>
          {data.name} {data.email} {data.company.name}
        </div>
      )}
    </div>
  );
}
