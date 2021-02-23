import React from "react";
import { Link } from "react-router-dom";
interface IBodyView {
  data: string;
  bodyItems?;
}

export default function BodyView({ data, bodyItems }: IBodyView) {
  return (
    <div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>{data}</div>
      <div>{bodyItems && bodyItems()}</div>
    </div>
  );
}
