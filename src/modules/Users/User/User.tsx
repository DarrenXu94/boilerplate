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
          <img
            src={`https://avatars.dicebear.com/api/open-peeps/${data.name}.svg`}
            alt="Dynamically generated avatar"
          />
          {data.name} {data.email} {data.company.name}
        </div>
      )}
    </div>
  );
}
