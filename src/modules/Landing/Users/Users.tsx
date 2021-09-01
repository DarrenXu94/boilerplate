import React from "react";
import { Link } from "react-router-dom";
import { useFetchUsers } from "./UsersActions";

export interface UsersProps {}

export default function Users({}: UsersProps) {
  const { data, isLoading } = useFetchUsers();
  if (isLoading) return <>Loading</>;

  return (
    <div>
      {data &&
        data.map((user) => {
          return (
            <div key={user.id}>
              <Link to={`/user/${user.id}`}>
                {user.name} {user.email}
              </Link>
            </div>
          );
        })}
    </div>
  );
}
