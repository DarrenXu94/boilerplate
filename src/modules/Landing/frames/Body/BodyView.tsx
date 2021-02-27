import React from "react";
import { Link } from "react-router-dom";
interface BodyViewProps {
  data: string;
  bodyItems?;
}

export default function BodyView({ data, bodyItems }: BodyViewProps) {
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
