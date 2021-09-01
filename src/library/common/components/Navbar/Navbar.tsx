import React from "react";
import { Link } from "react-router-dom";

export interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  return (
    <ul>
      <li>
        <Link to={`/users`}>Users</Link>
      </li>
      <li>
        <Link to={`/todos`}>To Dos</Link>
      </li>
    </ul>
  );
}
