import React from "react";
import { Link } from "react-router-dom";
interface BodyViewProps {
  bodyItems?;
}

export default function BodyView({ bodyItems }: BodyViewProps) {
  return (
    <div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>{bodyItems && bodyItems()}</div>
    </div>
  );
}
